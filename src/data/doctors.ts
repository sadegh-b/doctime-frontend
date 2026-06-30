export type Doctor = {
  id: number
  name: string
  specialty: string
  city: string
  rating: number
  nextAvailable: string
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "دکتر سارا نوری",
    specialty: "تخصص بیماری‌های داخلی",
    city: "شیراز",
    rating: 4.8,
    nextAvailable: "فردا ۱۰:۳۰",
  },
  {
    id: 2,
    name: "دکتر لیلا بهادرزاده",
    specialty: "فلوشیپ جراحی پستان",
    city: "یزد",
    rating: 3.8,
    nextAvailable: "امروز ۱۶:۰۰",
  },
  {
    id: 3,
    name: "دکتر علی احمدی",
    specialty: "متخصص قلب و عروق",
    city: "تهران",
    rating: 4.7,
    nextAvailable: "امروز ۱۸:۰۰",
  },
  {
    id: 4,
    name: "دکتر محمد رضایی",
    specialty: "چشم پزشکی",
    city: "اصفهان",
    rating: 4.9,
    nextAvailable: "فردا ۰۹:۰۰",
  },
  {
    id: 5,
    name: "دکتر نرگس کریمی",
    specialty: "روانپزشکی",
    city: "تهران",
    rating: 4.6,
    nextAvailable: "امروز ۲۰:۰۰",
  },
  {
    id: 6,
    name: "دکتر امیر حسینی",
    specialty: "ارتوپدی",
    city: "مشهد",
    rating: 4.5,
    nextAvailable: "فردا ۱۴:۰۰",
  },
  {
    id: 7,
    name: "دکتر الهام صادقی",
    specialty: "پوست و مو",
    city: "تبریز",
    rating: 4.4,
    nextAvailable: "امروز ۱۷:۳۰",
  },
  {
    id: 8,
    name: "دکتر رضا موسوی",
    specialty: "گوارش",
    city: "کرج",
    rating: 4.3,
    nextAvailable: "فردا ۱۱:۰۰",
  }
]
