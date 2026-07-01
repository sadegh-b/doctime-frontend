export type Doctor = {
  id: number
  name: string
  specialty: string
  city: string
  rate: number
  reviews: number
  image: string

  experience?: number
  fee?: number
  nextTime?: string
  medicalCode?: string
  insurance?: string[]

  visitType?: string[]
}

export type SearchParams = {
  name?: string
  city?: string
  specialty?: string
  sort?: string
  page?: number
  limit?: number
}

export type SearchDoctorsResponse = {
  data: Doctor[]
  total: number
}

const BASE_URL = "http://localhost:3001"

export async function searchDoctors(

  params: SearchParams

): Promise<SearchDoctorsResponse> {

  const query = new URLSearchParams()

  if (params.name?.trim()) {

    query.append("name_like", params.name)

  }

  if (params.city?.trim()) {

    query.append("city_like", params.city)

  }

  if (params.specialty?.trim()) {

    query.append("specialty_like", params.specialty)

  }

  if (params.sort === "rate") {

    query.append("_sort", "rate")
    query.append("_order", "desc")

  }

  if (params.sort === "reviews") {

    query.append("_sort", "reviews")
    query.append("_order", "desc")

  }

  query.append("_page", String(params.page || 1))

  query.append("_limit", String(params.limit || 6))

  const response = await fetch(

    `${BASE_URL}/doctors?${query.toString()}`

  )

  if (!response.ok) {

    throw new Error("Failed to fetch doctors")

  }

  const data: Doctor[] = await response.json()

  const total = Number(

    response.headers.get("X-Total-Count") || 0

  )

  return {

    data,
    total,

  }

}
