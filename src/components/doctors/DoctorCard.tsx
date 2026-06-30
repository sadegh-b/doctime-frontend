type Doctor = {
  id: number
  name: string
  specialty: string
  city: string
  rating: number
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{doctor.name}</h3>

      <p className="text-blue-600">{doctor.specialty}</p>

      <p className="text-gray-500">{doctor.city}</p>

      <p className="text-yellow-500">
        ⭐ {doctor.rating}
      </p>

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
        مشاهده پروفایل
      </button>
    </div>
  )
}
