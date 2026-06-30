import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "دکتر لیلا بهادرزاده",
    specialty: "فلوشیپ جراحی پستان",
    city: "یزد",
    address: "بلوار طالقانی، داخل کوچه هدایتی، ساختمان آزمایشگاه سینا",
    rating: 3.8,
    waitTime: "۱ ساعت",
    nextAvailable: "شنبه ۰۶ تیر - ۱۶:۰۰",
  },
  {
    id: 2,
    name: "دکتر سارا نوری",
    specialty: "تخصص بیماری‌های داخلی",
    city: "شیراز",
    address: "بلوار کسایی، کوچه ۱۴، پلاک ۷۱، کلینیک نارون",
    rating: 4.8,
    waitTime: "۳۰ دقیقه",
    nextAvailable: "فردا - ۱۰:۳۰",
  },
];

export default function TopDoctorsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
              {doctor.name[0]}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center gap-3">
                <h3 className="font-bold text-gray-800">{doctor.name}</h3>
                <span className="text-yellow-500 font-medium">★ {doctor.rating}</span>
              </div>

              <p className="text-sm text-gray-500 mt-1">{doctor.specialty}</p>

              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                📍 {doctor.city}، {doctor.address}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">میانگین زمان انتظار:</span>
              <span className="font-medium text-gray-700">{doctor.waitTime}</span>
            </div>

            <div className="flex justify-between text-xs">
              <span className="text-gray-500">اولین نوبت خالی:</span>
              <span className="font-medium text-green-600">{doctor.nextAvailable}</span>
            </div>
          </div>

          <Link
            to={`/doctors/${doctor.id}`}
            className="mt-4 block text-center bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            نوبت‌دهی آنلاین
          </Link>
        </div>
      ))}
    </div>
  );
}
