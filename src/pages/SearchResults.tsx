import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [params] = useSearchParams();

  const query = params.get("q");
  const city = params.get("city");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir="rtl">

      <h1 className="text-2xl font-bold mb-6">
        نتایج جستجو
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p className="text-gray-600 mb-2">
          جستجو برای:
          <span className="font-bold text-blue-600 mr-2">
            {query}
          </span>
        </p>

        <p className="text-gray-600">
          شهر:
          <span className="font-bold mr-2">
            {city}
          </span>
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">
              دکتر نمونه {item}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              متخصص قلب و عروق
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              دریافت نوبت
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}
