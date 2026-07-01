import { useEffect, useState } from "react"

type Appointment = {
  id: number
  doctorId: number
  doctorName: string
  patientName: string
  time: string
}

export default function MyAppointments() {

  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchAppointments() {

      try {

        const response = await fetch(
          "http://localhost:3001/appointments"
        )

        const data = await response.json()

        setAppointments(data)

      } catch (error) {

        console.error(error)

      } finally {

        setLoading(false)

      }

    }

    fetchAppointments()

  }, [])

  async function deleteAppointment(id: number) {

    const confirmDelete = confirm(
      "آیا از حذف این نوبت مطمئن هستید؟"
    )

    if (!confirmDelete) return

    try {

      await fetch(`http://localhost:3001/appointments/${id}`, {
        method: "DELETE"
      })

      setAppointments((prev) =>
        prev.filter((item) => item.id !== id)
      )

    } catch (error) {

      console.error(error)
      alert("خطا در حذف نوبت")

    }

  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>در حال دریافت نوبت‌ها...</p>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-slate-50 py-12"
      dir="rtl"
    >

      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            نوبت‌های من
          </h1>

          <p className="text-slate-500">
            لیست تمام نوبت‌های رزرو شده
          </p>

        </div>

        {appointments.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <p className="text-gray-500">
              هنوز نوبتی ثبت نشده است
            </p>

          </div>

        ) : (

          <div className="grid gap-6">

            {appointments.map((appointment) => (

              <div
                key={appointment.id}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div className="space-y-2">

                  <h2 className="text-xl font-bold">
                    {appointment.doctorName}
                  </h2>

                  <p className="text-gray-600">
                    بیمار: {appointment.patientName}
                  </p>

                  <p className="text-gray-500">
                    زمان نوبت: {appointment.time}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteAppointment(appointment.id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
                >
                  حذف نوبت
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}
