export type Center = {
  id: number
  name: string
  city: string
  address: string
  rating: number
}

export const centers: Center[] = [
  {
    id: 1,
    name: "بیمارستان عرفان",
    city: "تهران",
    address: "سعادت آباد",
    rating: 4.6,
  },
  {
    id: 2,
    name: "بیمارستان پارسیان",
    city: "تهران",
    address: "سعادت آباد",
    rating: 4.5,
  },
  {
    id: 3,
    name: "کلینیک دی",
    city: "تهران",
    address: "خیابان ولیعصر",
    rating: 4.3,
  },
  {
    id: 4,
    name: "کلینیک نور",
    city: "تهران",
    address: "ونک",
    rating: 4.4,
  }
]
