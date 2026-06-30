import { Link } from "react-router-dom";
import { TOP_DOCTORS } from "../data/homeData";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-slate-50 py-12" dir="rtl">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-2xl font-black mb-8 text-slate-800 border-r-4 border-blue-600 pr-4">
          نوبت‌دهی بهترین پزشکان ایران
        </h1>

        <div className="flex flex-col gap-4">
          {TOP_DOCTORS.map((doctor) => (
            <article key={doctor.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">

              {/* تصویر و امتیاز */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl font-black border-2 border-white shadow-inner">
                   {doctor.name[0]}
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                  <span>★</span>
                  <span>4.8</span>
                </div>
              </div>

              {/* اطلاعات اصلی */}
              <div className="flex-1">
                <h2 className="text-xl font-black text-slate-900 mb-1">{doctor.name}</h2>
                <p className="text-blue-600 font-bold text-sm mb-4">{doctor.specialty}</p>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="grayscale">📍</span>
                    <span>تهران، خیابان ولیعصر، ساختمان پزشکان ایران</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <span>🕒</span>
                    <span>اولین نوبت خالی: فردا ساعت ۱۰:۳۰</span>
                  </div>
                </div>
              </div>

              {/* دکمه عملیات */}
              <div className="flex flex-col justify-center gap-2 border-r pr-6 border-slate-100">
                <div className="text-center mb-2">
                  <p className="text-[10px] text-slate-400">میانگین انتظار</p>
                  <p className="text-sm font-bold">۴۵ دقیقه</p>
                </div>
                <Link to={`/doctors/${doctor.id}`} className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all text-center">
                  دریافت نوبت
                </Link>
                <button className="text-blue-600 font-bold text-sm hover:underline">
                  مشاوره تلفنی
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
