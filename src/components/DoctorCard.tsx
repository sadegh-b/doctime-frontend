import { Link } from "react-router-dom";

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    specialty: string;
    rate: string;
    reviews: string;
    nextTime: string;
    city: string;
    image: string;
    experience: string;
    medicalCode: string;
    fee: string;
    insurance: string[];
    visitType: string;
  };
  variant?: "default" | "compact";
}

export default function DoctorCard({ doctor, variant = "default" }: DoctorCardProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3 border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm">
            {doctor.image}
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm">{doctor.name}</p>
            <p className="text-xs text-slate-500">{doctor.nextTime}</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-1 text-xs font-bold">
          آزاد
        </span>
      </div>
    );
  }

  return (
    <article className="rounded-[2rem] bg-slate-50 border border-slate-100 p-6 hover:shadow-xl transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-black text-lg">
            {doctor.image}
          </div>
          <div>
            <h3 className="font-black text-lg text-slate-800">{doctor.name}</h3>
            <p className="text-blue-600 font-bold text-sm mt-1">{doctor.specialty}</p>
          </div>
        </div>
        <span className="rounded-full bg-amber-100 text-amber-700 px-3 py-1 text-sm font-black">
          ⭐ {doctor.rate}
        </span>
      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p>📍 {doctor.city}</p>
        <p>
          🕒 اولین نوبت خالی:{" "}
          <span className="font-black text-emerald-600">{doctor.nextTime}</span>
        </p>
        <p>💬 {doctor.reviews} نظر کاربران</p>
        <p>🧾 شماره نظام پزشکی: {doctor.medicalCode}</p>
        <p>⏳ {doctor.experience}</p>
        <p>🏥 نوع ویزیت: {doctor.visitType}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {doctor.insurance.map((item) => (
          <span key={item} className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold">
            {item}
          </span>
        ))}
      </div>

      <Link
        to={`/doctors/${doctor.id}`}
        className="mt-6 flex justify-center rounded-2xl bg-blue-600 px-5 py-3 font-black text-white hover:bg-blue-700 transition"
      >
        مشاهده پروفایل و رزرو
      </Link>
    </article>
  );
}
