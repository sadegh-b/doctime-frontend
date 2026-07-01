import { useEffect, useState } from "react"

export default function DoctorAppointments() {

  const [appointments, setAppointments] = useState<any[]>([])

  useEffect(() => {

    fetch("http://localhost:3001/appointments")
      .then(res => res.json())
      .then(data => setAppointments(data))

  }, [])

  return (

    <div className="p-10">

      <h1 className="text-2xl font-black mb-6">
        نوبت‌های رزرو شده
      </h1>

      <table className="w-full bg-white rounded-xl">

        <thead>
          <tr className="border-b">
            <th className="p-3">بیمار</th>
            <th className="p-3">روز</th>
            <th className="p-3">ساعت</th>
          </tr>
        </thead>

        <tbody>

          {appointments.map((a) => (

            <tr key={a.id} className="border-b">

              <td className="p-3">
                {a.patientName}
              </td>

              <td className="p-3">
                {a.day}
              </td>

              <td className="p-3">
                {a.time}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}
