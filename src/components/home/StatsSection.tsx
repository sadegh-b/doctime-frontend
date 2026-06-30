// مسیر: src/components/home/StatsSection.tsx

export default function StatsSection() {
  const stats = [
    { label: "پزشک متخصص", value: "۵۰۰۰+" },
    { label: "تخصص پزشکی", value: "۸۰+" },
    { label: "استان تحت پوشش", value: "۳۱" },
    { label: "نوبت موفق", value: "۲ میلیون" },
  ];

  return (
    <section className="bg-blue-50 py-10 my-8 rounded-2xl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
