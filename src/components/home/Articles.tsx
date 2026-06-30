import { ARTICLES } from "../../data/homeData";

export default function Articles() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black mb-8">مجله سلامت</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <div key={a.id} className="group cursor-pointer">
              <div className="h-48 bg-slate-200 rounded-2xl mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition">
                {a.img}
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">{a.title}</h3>
              <p className="text-xs text-slate-400">{a.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
