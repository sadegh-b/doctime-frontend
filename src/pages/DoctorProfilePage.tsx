import { useParams, Link } from "react-router-dom"
import { doctors } from "../data/doctors"

export default function DoctorProfilePage() {

  const { id } = useParams()

  const doctor = doctors.find(
    (d) => d.id === Number(id)
  )

  if (!doctor) {
    return (
      <div className="container mx-auto py-10 text-center">

        <h1 className="text-3xl font-bold mb-4">
          پزشک پیدا نشد
        </h1>

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          بازگشت به صفحه اصلی
        </Link>

      </div>
    )
  }

  const availableTimes = [
    "امروز ۱۶:۰۰",
    "امروز ۱۸:۰۰",
    "فردا ۱۰:۳۰",
    "فردا ۱۲:۰۰",
  ]

  return (
    <div className="container mx-auto py-10 px-4">

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700 shrink-0">
            {doctor.name.charAt(0)}
          </div>

          {/* Content */}
          <div className="flex-1">

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {doctor.name}
            </h1>

            <p className="text-blue-600 text-lg mb-3">
              {doctor.specialty}
            </p>

            <p className="text-gray-500 mb-2">
              📍 {doctor.city}
            </p>

            <p className="text-yellow-500 font-semibold mb-6">
              ⭐ {doctor.rating}
            </p>

            {/* About */}
            <div className="mb-8">

              <h2 className="text-xl font-bold mb-3">
                درباره پزشک
              </h2>

              <p className="text-gray-600 leading-8">
                این پزشک دارای تجربه بالا در زمینه تخصص خود بوده و
                امکان دریافت نوبت آنلاین برای بیماران فراهم است.
              </p>

            </div>

            {/* Available Times */}
            <div className="mb-8">

              <h2 className="text-xl font-bold mb-4">
                زمان‌های خالی نوبت
              </h2>

              <div className="flex flex-wrap gap-3">

                {availableTimes.map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 rounded-xl bg-green-100 hover:bg-green-200 text-green-700 transition"
                  >
                    {time}
                  </button>
                ))}

              </div>

            </div>

            {/* CTA */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition">
              رزرو نوبت
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}
