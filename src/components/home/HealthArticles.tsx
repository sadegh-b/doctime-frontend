export default function HealthArticles() {
  const articles = [
    { id: 1, title: "رژیم غذایی سالم برای قلب", category: "تغذیه", image: "🍎" },
    { id: 2, title: "راه‌های کاهش استرس کاری", category: "روانشناسی", image: "🧘" },
    { id: 3, title: "اهمیت خواب در سلامت کودکان", category: "کودکان", image: "🌙" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((art) => (
        <div key={art.id} className="group cursor-pointer">
          <div className="aspect-video bg-slate-100 rounded-[2rem] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
            {art.image}
          </div>
          <div className="mt-4 px-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{art.category}</span>
            <h3 className="text-lg font-black mt-1 group-hover:text-blue-600 transition-colors">{art.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
