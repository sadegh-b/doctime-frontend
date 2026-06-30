// src/components/home/Testimonials.tsx

import { TESTIMONIALS } from "../../data/homeData";

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black mb-10 text-center text-slate-800">نظرات کاربران</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold ml-3">
                  {item.user.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{item.user}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 text-xs ml-1">★</span>
                    <span className="text-slate-400 text-xs">{item.rate}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 italic">
                "{item.text}"
              </p>

              <div className="pt-4 border-t border-slate-50">
                <span className="text-xs text-slate-400">مراجعه به:</span>
                <span className="text-xs font-medium text-blue-600 mr-1">{item.doctor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
