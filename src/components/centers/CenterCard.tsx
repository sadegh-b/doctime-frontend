type Center = {
  id: number
  name: string
  city: string
  address: string
  rating: number
}

export default function CenterCard({ center }: { center: Center }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{center.name}</h3>

      <p className="text-blue-600">{center.city}</p>

      <p className="text-gray-500">{center.address}</p>

      <p className="text-yellow-500">
        ⭐ {center.rating}
      </p>

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
        مشاهده مرکز
      </button>
    </div>
  )
}
