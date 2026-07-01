import { Link } from "react-router-dom"

export default function DoctorDashboard() {

  return (

    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-black mb-10">
          پنل پزشک
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/dashboard/appointments"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">
              نوبت‌های من
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              مشاهده بیماران و نوبت‌ها
            </p>
          </Link>

          <Link
            to="/dashboard/schedule"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg">
              تنظیم برنامه کاری
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              تعیین ساعات کاری
            </p>
          </Link>

        </div>

      </div>

    </div>

  )
}
