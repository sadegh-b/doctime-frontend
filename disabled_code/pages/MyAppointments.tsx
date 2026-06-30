import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("my_appointments") || "[]");
      setAppointments(stored);
    } catch (error) {
      console.error("خطا در خواندن نوبت‌ها از localStorage:", error);
      setAppointments([]);
    }
  };

  const cancelAppointment = (id) => {
    const confirmed = window.confirm("آیا از لغو این نوبت مطمئن هستید؟");
    if (!confirmed) return;

    try {
      const stored = JSON.parse(localStorage.getItem("my_appointments") || "[]");
      const updated = stored.filter((appointment) => appointment.id !== id);
      localStorage.setItem("my_appointments", JSON.stringify(updated));
      setAppointments(updated);
    } catch (error) {
      console.error("خطا در لغو نوبت:", error);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10" dir="rtl">
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 md:p-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800">نوبت‌های من</h2>
            <p className="text-slate-500 text-sm mt-2">
              در این بخش می‌توانی نوبت‌های رزرو شده را ببینی و در صورت نیاز لغو کنی.
            </p>
          </div>

          <Link
            to="/doctors"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            رزرو نوبت جدید
          </Link>
        </div>

        {appointments.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
            <p className="text-slate-500 font-bold mb-4">هنوز هیچ نوبتی ثبت نکرده‌ای.</p>
            <Link
              to="/doctors"
              className="inline-flex px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
              رفتن به لیست پزشکان
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-slate-50 border border-slate-200 rounded-[1.5rem] p-5 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-800">
                      {appointment.doctorName || "پزشک نامشخص"}
                    </h3>
                    <p className="text-blue-600 font-bold text-sm mt-1">
                      {appointment.specialty || "تخصص نامشخص"}
                    </p>
                  </div>

                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      appointment.status === "تایید شده"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status || "نامشخص"}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <span className="font-bold text-slate-500">روز:</span>{" "}
                    {appointment.day || "-"}
                  </p>
                  <p>
                    <span className="font-bold text-slate-500">ساعت:</span>{" "}
                    {appointment.time || "-"}
                  </p>
                  <p>
                    <span className="font-bold text-slate-500">شهر:</span>{" "}
                    {appointment.city || "-"}
                  </p>
                  <p>
                    <span className="font-bold text-slate-500">هزینه:</span>{" "}
                    {appointment.fee ? `${appointment.fee.toLocaleString()} تومان` : "نامشخص"}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    to={`/doctors/${appointment.doctorId}`}
                    className="flex-1 text-center px-4 py-3 rounded-xl bg-white border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition"
                  >
                    مشاهده پزشک
                  </Link>

                  <button
                    onClick={() => cancelAppointment(appointment.id)}
                    className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition"
                  >
                    لغو نوبت
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
