// src/data/provinces.ts
export interface Province {
  name: string;
  cities: string[];
}

export const PROVINCES_CITIES: Province[] = [
  { name: "تهران", cities: ["تهران", "شهریار", "اسلامشهر"] },
  { name: "سیستان و بلوچستان", cities: ["زاهدان", "زابل", "چابهار"] },
  { name: "اصفهان", cities: ["اصفهان", "کاشان", "نجف‌آباد"] }
];
