import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getDoctors } from "../services/doctors"

type Doctor = {
  id: number
  name: string
  specialty: string
  image: string
  nextAvailable: string
  city: string
  rating: number
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const data = (await getDoctors()) as Doctor[]
        setDoctors(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">در حال دریافت پزشکان...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            نوبت‌دهی بهترین پزشکان ایران
          </h1>

          <p className="text-slate-500">
            پزشک مورد نظر خود را انتخاب و آنلاین نوبت رزرو کنید
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6"
            >

              <div className="flex items-center gap-4 mb-4">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    {doctor.name}
                  </h2>

                  <p className="text-slate-500 text-sm">
                    {doctor.specialty}
                  </p>
                </div>

              </div>

              <div className="space-y-2 text-sm text-slate-600">

                <p>📍 {doctor.city}</p>

                <p>⭐ {doctor.rating}</p>

                <p>
                  ⏰ اولین نوبت: {doctor.nextAvailable}
                </p>

              </div>

              <Link
                to={`/doctors/${doctor.id}`}
                className="mt-5 block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
              >
                دریافت نوبت
              </Link>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
