import { useState } from "react"
import { addReview } from "../services/reviews"

type Props = {
  doctorId: number
  onAdded: () => void
}

export default function AddReviewForm({ doctorId, onAdded }: Props) {

  const [patientName, setPatientName] = useState("")
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  async function handleSubmit() {

    await addReview({
      doctorId,
      patientName,
      rating,
      comment
    })

    setPatientName("")
    setComment("")
    setRating(5)

    onAdded()

  }

  return (

    <div className="mt-6 border p-4 rounded-xl">

      <h3 className="font-bold mb-4">
        ثبت نظر
      </h3>

      <input
        placeholder="نام شما"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 w-full mb-3"
      >
        <option value={5}>5 ⭐</option>
        <option value={4}>4 ⭐</option>
        <option value={3}>3 ⭐</option>
        <option value={2}>2 ⭐</option>
        <option value={1}>1 ⭐</option>
      </select>

      <textarea
        placeholder="نظر شما"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        ارسال نظر
      </button>

    </div>

  )
}
