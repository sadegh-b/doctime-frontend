import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { TOP_DOCTORS } from "../data/homeData"
import ReviewsList from "../components/ReviewsList"
import AddReviewForm from "../components/AddReviewForm"
import { getDoctorReviews } from "../services/reviews"
import { calculateRating } from "../utils/calculateRating"

export default function DoctorProfilePage() {

const { rating, count } = calculateRating(reviews)

  const { id } = useParams()

  const doctorId = Number(id)

  const doctor = TOP_DOCTORS.find((item) => item.id === doctorId)

  const [reviews, setReviews] = useState([])

  const [selectedTime, setSelectedTime] = useState("")
  const [patientName, setPatientName] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function loadReviews() {

    const data = await getDoctorReviews(doctorId)

    setReviews(data)

  }

  useEffect(() => {

    loadReviews()

  }, [doctorId])


  if (!doctor) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center space-y-4">

          <h2 className="text-xl font-bold">
            پزشک پیدا نشد
          </h2>

          <Link
            to="/doctors"
            className="text-blue-600 hover:underline"
          >
            بازگشت به لیست پزشکان
          </Link>

        </div>

      </div>

    )

  }

  const availableTimes = [
    "امروز ۱۶:۰۰",
    "امروز ۱۸:۰۰",
    "فردا ۱۰:۳۰",
    "فردا ۱۲:۰۰",
  ]


  async function handleBooking() {

    if (!selectedTime || !patientName) {

      alert("لطفا نام و زمان را انتخاب کنید")
      return

    }

    try {

      setLoading(true)

      const response = await fetch(
        "http://localhost:3001/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            doctorId: doctor.id,
            doctorName: doctor.name,
            patientName: patientName,
            time: selectedTime
          })
        }
      )

      if (!response.ok) {

        throw new Error("Booking failed")

      }

      setSuccess(true)

    } catch (error) {

      console.error(error)

      alert("خطا در ثبت نوبت")

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className="min-h-screen bg-slate-50 py-12" dir="rtl">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 space-y-8">

        {/* Doctor Info */}

        <div className="flex items-center gap-6">

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="space-y-1">

            <h1 className="text-2xl font-bold">
              {doctor.name}
            </h1>

            <p className="text-gray-600">
              {doctor.specialty}
            </p>

            <div className="flex gap-4 text-sm text-gray-500">
            <span>
               ⭐ {rating} ({count} نظر)
             </span>

              <span>
                📍 {doctor.city}
              </span>

              <span>
                ⭐ {doctor.rating}
              </span>

            </div>

          </div>

        </div>

        {/* About Doctor */}

        <div>

          <h2 className="text-lg font-semibold mb-2">
            درباره پزشک
          </h2>

          <p className="text-gray-600 leading-7">

            {doctor.name} یکی از پزشکان باتجربه در حوزه {doctor.specialty} است.
            امکان دریافت نوبت آنلاین برای بیماران فراهم شده است و بیماران
            می‌توانند به‌صورت حضوری یا آنلاین مشاوره دریافت کنند.

          </p>

        </div>

        {/* Booking */}

        <div className="space-y-4">

          <h2 className="text-lg font-semibold">
            رزرو نوبت
          </h2>

          <input
            type="text"
            placeholder="نام بیمار"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />

          <div className="flex flex-wrap gap-3">

            {availableTimes.map((time) => (

              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`border px-4 py-2 rounded-lg transition
                ${selectedTime === time
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50"
                }`}
              >
                {time}
              </button>

            ))}

          </div>

          <button
            onClick={handleBooking}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >

            {loading ? "در حال ثبت..." : "ثبت نوبت"}

          </button>

          {success && (

            <div className="p-4 bg-green-50 text-green-700 rounded-lg">

              ✅ نوبت شما با موفقیت ثبت شد

            </div>

          )}

        </div>

        {/* Reviews */}

        <div>

          <h2 className="text-xl font-bold mt-10 mb-4">
            نظرات بیماران
          </h2>

          <ReviewsList reviews={reviews} />

          <AddReviewForm
            doctorId={doctorId}
            onAdded={loadReviews}
          />

        </div>

      </div>

    </div>

  )

}
