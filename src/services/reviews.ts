const API = "http://localhost:3001/reviews"

export type Review = {
  id?: number
  doctorId: number
  patientName: string
  rating: number
  comment: string
}

export async function getDoctorReviews(doctorId: number) {

  const res = await fetch(`${API}?doctorId=${doctorId}`)

  return res.json()

}

export async function addReview(review: Review) {

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })

  return res.json()

}
