// Real job photos from Netanel (EXIF/GPS stripped). Add new ones here; captions describe only what is visible.

export type ProjectPhoto = { name: string; src: string; caption: string; category: string; width: number; height: number };

export const PROJECT_PHOTOS: ProjectPhoto[] = [
  { name: "chalon-belgi-mitbach-pinati", src: "/images/projects/chalon-belgi-mitbach-pinati.jpg", caption: "חלונות בלגיים בגוון ברונזה במטבח פינתי", category: "חלונות בלגיים", width: 960, height: 960 },
  { name: "sgirat-patio-zchuchit", src: "/images/projects/sgirat-patio-zchuchit.jpg", caption: "סגירת פטיו באלומיניום וזכוכית", category: "חדרי זכוכית וסגירות", width: 1080, height: 720 },
  { name: "chalon-amvatya-im-trys", src: "/images/projects/chalon-amvatya-im-trys.jpg", caption: "חלון אלומיניום עם תריס בחדר רחצה", category: "חלונות לאמבטיה", width: 640, height: 960 },
  { name: "chalon-belgi-erker", src: "/images/projects/chalon-belgi-erker.jpg", caption: "חלון בלגי פינתי (ארקר) עם נוף לגינה", category: "חלונות בלגיים", width: 1600, height: 1600 },
  { name: "chalon-belgi-erker-mitbach", src: "/images/projects/chalon-belgi-erker-mitbach.jpg", caption: "חלון בלגי פינתי מעל כיור המטבח", category: "חלונות בלגיים", width: 1600, height: 1600 },
  { name: "chalon-im-trys-glila", src: "/images/projects/chalon-im-trys-glila.jpg", caption: "חלון הזזה עם תריס גלילה מאלומיניום", category: "תריסים", width: 1200, height: 1600 },
  { name: "chalon-vedelet-hazaza-trysim", src: "/images/projects/chalon-vedelet-hazaza-trysim.jpg", caption: "חלון ודלת הזזה עם תריסי גלילה ופרגולה", category: "תריסים ודלתות", width: 1600, height: 1200 },
  { name: "chalon-tsir-im-kvuim", src: "/images/projects/chalon-tsir-im-kvuim.jpg", caption: "חלון ציר בגוון אפור עם חלקים קבועים", category: "חלונות ציר וקיפ", width: 896, height: 896 },
  { name: "chalon-kip-mitbach", src: "/images/projects/chalon-kip-mitbach.jpg", caption: "חלון קיפ מעל משטח העבודה במטבח", category: "חלונות ציר וקיפ", width: 720, height: 720 },
  { name: "delet-knisa-vechalon-belgi", src: "/images/projects/delet-knisa-vechalon-belgi.jpg", caption: "דלת כניסה מאלומיניום עם פסי זכוכית וחלון בלגי", category: "דלתות כניסה", width: 1600, height: 1600 },
  { name: "chalon-gadol-im-reshet", src: "/images/projects/chalon-gadol-im-reshet.jpg", caption: "חלון אלומיניום גדול עם קבועים ורשת", category: "חלונות ורשתות", width: 720, height: 720 },
  { name: "chalon-belgi-lavan", src: "/images/projects/chalon-belgi-lavan.jpg", caption: "חלון בלגי לבן", category: "חלונות בלגיים", width: 1080, height: 582 },
  { name: "delet-hazaza-salon", src: "/images/projects/delet-hazaza-salon.jpg", caption: "דלת הזזה מאלומיניום ביציאה מהסלון", category: "דלתות הזזה", width: 900, height: 1600 },
  { name: "delet-pnim-zchuchit-mechoretzet", src: "/images/projects/delet-pnim-zchuchit-mechoretzet.jpg", caption: "דלת פנים מאלומיניום עם זכוכית מחורצת", category: "דלתות פנים", width: 900, height: 1600 },
  { name: "delet-pnim-zchuchit-mechoretzet-2", src: "/images/projects/delet-pnim-zchuchit-mechoretzet-2.jpg", caption: "דלת אלומיניום פנימית עם זכוכית מחורצת", category: "דלתות פנים", width: 900, height: 1600 },
];

export function photo(name: string): ProjectPhoto {
  const p = PROJECT_PHOTOS.find((x) => x.name === name);
  if (!p) throw new Error(`unknown project photo: ${name}`);
  return p;
}
