// src/components/home/CitySearch.tsx
import { useState } from "react";
import { PROVINCES_CITIES, type Province } from "../../data/provinces";

export default function CitySearch() {
  const [selectedProvince, setSelectedProvince] = useState<Province>(PROVINCES_CITIES[0]);

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-black mb-8 text-slate-800">جستجو بر اساس شهر</h2>
        <div className="flex gap-3 overflow-x-auto pb-6">
          {PROVINCES_CITIES.map((province: Province) => (
            <button
              key={province.name}
              onClick={() => setSelectedProvince(province)}
              className={`px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition ${
                selectedProvince.name === province.name ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {province.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {selectedProvince.cities.map((city: string) => (
            <div key={city} className="p-4 bg-slate-50 rounded-xl text-center border">
              <span className="text-sm font-bold text-slate-700">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
