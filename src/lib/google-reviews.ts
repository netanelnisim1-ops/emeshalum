// Live rating, review count and latest reviews from our Google Business Profile (Places API, New).
// Needs GOOGLE_PLACES_API_KEY in the Vercel env. Without it (or on any error) callers fall back
// to the hand-copied reviews, so the homepage never breaks.

export const GOOGLE_PLACE_ID = "ChIJ4Ru8GGnurqYRZz68zWiGAmQ";

// Re-fetch at most every 6 hours (ISR) - keeps the API well inside Google's free monthly usage.
const REVALIDATE_SECONDS = 6 * 60 * 60;

export type LiveReview = { author: string; rating: number; text: string; when?: string };
export type LiveReviews = { rating: number; count: number; reviews: LiveReview[] };

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
};

export async function getLiveGoogleReviews(): Promise<LiveReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=iw`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );
    if (!res.ok) {
      console.error("[google-reviews] Places API", res.status, await res.text());
      return null;
    }
    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      reviews?: PlacesReview[];
    };
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") return null;
    return {
      rating: data.rating,
      count: data.userRatingCount,
      reviews: (data.reviews || [])
        .map((r) => ({
          author: r.authorAttribution?.displayName || "",
          rating: r.rating || 5,
          text: (r.originalText?.text || r.text?.text || "").trim(),
          when: r.relativePublishTimeDescription,
        }))
        .filter((r) => r.text),
    };
  } catch (err) {
    console.error("[google-reviews] fetch failed", err);
    return null;
  }
}
