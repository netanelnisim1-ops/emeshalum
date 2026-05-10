"""
מוריד את התמונות מאינסטגרם של @aluminium_emesh לתיקיית public/images/gallery
ומייצר קובץ JSON עם פרטים על כל תמונה (כיתוב, תאריך) שיוכל לשמש לבניית הגלריה.

שימוש:
    python scripts/download_instagram.py
    python scripts/download_instagram.py --max 20    # להוריד רק 20 פוסטים אחרונים
    python scripts/download_instagram.py --login     # אם נכשל, נסה עם התחברות

דרישות:
    pip install instaloader pillow
"""

from __future__ import annotations

import argparse
import json
import shutil
import sys
from datetime import datetime
from pathlib import Path

try:
    import instaloader
except ImportError:
    print("ERROR: instaloader is not installed.")
    print("Install with:  python -m pip install instaloader pillow")
    sys.exit(1)

try:
    from PIL import Image
    HAS_PIL = True
except ImportError:
    HAS_PIL = False
    print("WARN: Pillow not installed — skipping image optimization.")
    print("      Install with:  python -m pip install pillow")

USERNAME = "aluminium_emesh"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = PROJECT_ROOT / "public" / "images" / "gallery"
TEMP_DIR = PROJECT_ROOT / "scripts" / "_instagram_tmp"
JSON_OUTPUT = PROJECT_ROOT / "src" / "lib" / "gallery-data.json"
MAX_IMAGE_WIDTH = 1600  # לא יותר רחב מזה — חיסכון בגודל קובץ
JPEG_QUALITY = 82


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Download Instagram photos for gallery.")
    parser.add_argument("--max", type=int, default=30, help="Max number of posts to download (default 30).")
    parser.add_argument("--login", action="store_true", help="Login (interactive). Use if anonymous fails.")
    parser.add_argument("--username", default=USERNAME, help=f"Instagram username (default: {USERNAME}).")
    return parser.parse_args()


def setup_loader(login: bool) -> instaloader.Instaloader:
    loader = instaloader.Instaloader(
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=True,
        post_metadata_txt_pattern="",
        compress_json=False,
        dirname_pattern=str(TEMP_DIR),
    )

    if login:
        username = input("Your Instagram username: ").strip()
        loader.interactive_login(username)
        print(f"Logged in as {username}")

    return loader


def download_posts(loader: instaloader.Instaloader, target_username: str, max_posts: int) -> list[dict]:
    print(f"Fetching profile @{target_username}...")
    try:
        profile = instaloader.Profile.from_username(loader.context, target_username)
    except instaloader.exceptions.ProfileNotExistsException:
        print(f"ERROR: profile @{target_username} not found.")
        sys.exit(1)
    except instaloader.exceptions.LoginRequiredException:
        print("ERROR: Instagram is requiring login. Re-run with --login flag.")
        sys.exit(1)
    except Exception as exc:
        print(f"ERROR fetching profile: {exc}")
        print("Try re-running with --login flag.")
        sys.exit(1)

    print(f"Found profile: {profile.full_name or profile.username}")
    print(f"Total posts: {profile.mediacount}")
    print(f"Downloading up to {max_posts} most recent image posts...\n")

    if TEMP_DIR.exists():
        shutil.rmtree(TEMP_DIR)
    TEMP_DIR.mkdir(parents=True, exist_ok=True)

    metadata: list[dict] = []
    downloaded = 0

    for post in profile.get_posts():
        if downloaded >= max_posts:
            break
        if post.is_video:
            continue
        try:
            loader.download_post(post, target=target_username)
            metadata.append({
                "shortcode": post.shortcode,
                "caption": (post.caption or "").strip(),
                "date": post.date.isoformat(),
                "likes": post.likes,
            })
            downloaded += 1
            print(f"  [{downloaded}/{max_posts}] {post.shortcode} ({post.date.date()})")
        except Exception as exc:
            print(f"  WARN: failed {post.shortcode}: {exc}")

    print(f"\nDownloaded {downloaded} posts to {TEMP_DIR}")
    return metadata


def optimize_and_move(metadata: list[dict]) -> list[dict]:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for old in OUTPUT_DIR.glob("instagram-*"):
        old.unlink()

    final_metadata: list[dict] = []
    src_root = TEMP_DIR / USERNAME if (TEMP_DIR / USERNAME).exists() else TEMP_DIR

    image_files = sorted(src_root.rglob("*.jpg")) + sorted(src_root.rglob("*.png"))
    image_files = [p for p in image_files if not p.name.endswith("_profile_pic.jpg")]

    print(f"\nOptimizing and copying {len(image_files)} images...")

    for idx, src_file in enumerate(image_files, start=1):
        dst_filename = f"instagram-{idx:02d}.jpg"
        dst_path = OUTPUT_DIR / dst_filename

        if HAS_PIL:
            try:
                with Image.open(src_file) as img:
                    img = img.convert("RGB")
                    if img.width > MAX_IMAGE_WIDTH:
                        ratio = MAX_IMAGE_WIDTH / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((MAX_IMAGE_WIDTH, new_height), Image.Resampling.LANCZOS)
                    img.save(dst_path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
                size_kb = dst_path.stat().st_size / 1024
                print(f"  [{idx}/{len(image_files)}] {dst_filename}  ({img.width}x{img.height}, {size_kb:.0f}KB)")
            except Exception as exc:
                print(f"  WARN: could not optimize {src_file.name} ({exc}) — copying as-is")
                shutil.copy(src_file, dst_path)
        else:
            shutil.copy(src_file, dst_path)
            print(f"  [{idx}/{len(image_files)}] {dst_filename}  (copied as-is)")

        if idx <= len(metadata):
            entry = metadata[idx - 1]
            final_metadata.append({
                "filename": dst_filename,
                "src": f"/images/gallery/{dst_filename}",
                "caption": entry["caption"],
                "date": entry["date"],
                "alt": clean_caption_for_alt(entry["caption"]),
            })
        else:
            final_metadata.append({
                "filename": dst_filename,
                "src": f"/images/gallery/{dst_filename}",
                "caption": "",
                "date": "",
                "alt": f"פרויקט אלומיניום של א.מ.ש - תמונה {idx}",
            })

    return final_metadata


def clean_caption_for_alt(caption: str) -> str:
    if not caption:
        return "פרויקט אלומיניום של א.מ.ש אלומיניום"
    first_line = caption.split("\n")[0].strip()
    first_line = first_line.replace("#", "").strip()
    if len(first_line) > 100:
        first_line = first_line[:97] + "..."
    return first_line or "פרויקט אלומיניום של א.מ.ש אלומיניום"


def write_json(metadata: list[dict]) -> None:
    JSON_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "username": USERNAME,
        "downloaded_at": datetime.now().isoformat(),
        "count": len(metadata),
        "items": metadata,
    }
    JSON_OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote metadata to {JSON_OUTPUT}")


def cleanup() -> None:
    if TEMP_DIR.exists():
        shutil.rmtree(TEMP_DIR)
        print(f"Cleaned up {TEMP_DIR}")


def main() -> None:
    args = parse_args()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    loader = setup_loader(login=args.login)
    raw_metadata = download_posts(loader, args.username, args.max)
    final_metadata = optimize_and_move(raw_metadata)
    write_json(final_metadata)
    cleanup()

    print("\n" + "=" * 60)
    print(f"DONE! {len(final_metadata)} images ready in:")
    print(f"  {OUTPUT_DIR}")
    print(f"\nMetadata JSON:")
    print(f"  {JSON_OUTPUT}")
    print("\nNext step: ask Claude to update Gallery component to use these images.")
    print("=" * 60)


if __name__ == "__main__":
    main()
