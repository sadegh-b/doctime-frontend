// src/components/home/ServicesCards.tsx
export default function ServicesCards() {
  const services = [
    { title: "مشاوره تلفنی", desc: "گفتگو با پزشک در کمتر از ۵ دقیقه", icon: "📞", color: "bg-blue-50 text-blue-600" },
    { title: "آزمایش در محل", desc: "نمونه‌گیری خون در منزل شما", icon: "🧪", color: "bg-purple-50 text-purple-600" },
    { title: "ویزیت حضوری", desc: "رزرو سریع نوبت از مطب", icon: "🏥", color: "bg-emerald-50 text-emerald-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className={`${s.color} p-8 rounded-[2rem] flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform`}>
          <span className="text-5xl mb-4">{s.icon}</span>
          <h3 className="text-xl font-black mb-2">{s.title}</h3>
          <p className="opacity-80 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
