import { Review } from "../services/reviews"

export function calculateRating(reviews: Review[]) {

  if (reviews.length === 0) {

    return {
      rating: 0,
      count: 0
    }

  }

  const total = reviews.reduce(
    (sum, r) => sum + r.rating,
    0
  )

  const avg = total / reviews.length

  return {
    rating: Number(avg.toFixed(1)),
    count: reviews.length
  }

}
