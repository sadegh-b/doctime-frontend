import { Review } from "../services/reviews"

type Props = {
  reviews: Review[]
}

export default function ReviewsList({ reviews }: Props) {

  if (reviews.length === 0) {
    return <p>هنوز نظری ثبت نشده</p>
  }

  return (

    <div className="space-y-4">

      {reviews.map((r) => (

        <div
          key={r.id}
          className="border rounded-xl p-4"
        >

          <div className="flex justify-between">

            <strong>{r.patientName}</strong>

            <span>
              {"⭐".repeat(r.rating)}
            </span>

          </div>

          <p className="text-gray-600 mt-2">
            {r.comment}
          </p>

        </div>

      ))}

    </div>

  )
}
