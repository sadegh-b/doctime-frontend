export type Doctor = {
  id: number
  name: string
  specialty: string
  city: string
  rating: number
  image: string
  nextAvailable: string
}

const BASE_URL = "http://localhost:3001/doctors"

export async function searchDoctors(params: {
  name?: string
  specialty?: string
  city?: string
}) {

  const query = new URLSearchParams()

  if (params.name) {
    query.append("name_like", params.name)
  }

  if (params.specialty) {
    query.append("specialty_like", params.specialty)
  }

  if (params.city) {
    query.append("city_like", params.city)
  }

  const response = await fetch(`${BASE_URL}?${query.toString()}`)

  if (!response.ok) {
    throw new Error("Failed to fetch doctors")
  }

  return response.json()
}
