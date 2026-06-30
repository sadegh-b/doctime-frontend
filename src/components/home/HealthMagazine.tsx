import { Link } from "react-router-dom";

const magazinePosts = [
  {
    id: 1,
    title: "رژیم غذایی سالم برای بیماران قلبی",
    category: "تغذیه",
    icon: "🍎",
    color: "text-red-500",
  },
  {
    id: 2,
    title: "روش‌های علمی برای درمان یبوست مزمن",
    category: "گوارش",
    icon: "🍏",
    color: "text-green-500",
  },
  {
    id: 3,
    title: "کنترل دیابت با تغییر سبک زندگی",
    category: "دیابت",
    icon: "🩸",
    color: "text-blue-500",
  },
  {
    id: 4,
    title: "مراحل رهایی و ترک اعتیاد موفق",
    category: "سلامت روان",
    icon: "💪",
    color: "text-purple-500",
  },
  {
    id: 5,
    title: "کاهش استرس کاری در محیط شلوغ",
    category: "روانشناسی",
    icon: "🧘",
    color: "text-indigo-500",
  },
  {
    id: 6,
    title: "اهمیت خواب عمیق در رشد کودکان",
    category: "کودکان",
    icon: "🌙",
    color: "text-amber-500",
  },
];

export default function HealthMagazine() {
  return (
    <div className="py-10">
      <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-4">
        <h2 className="text-3xl font-black text-slate-900">
          مجله سلامت داک‌تایم
        </h2>

        <Link
          to="/mag"
          className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors"
        >
          مشاهده همه مقالات
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
        {magazinePosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="flex flex-col gap-3">
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110 w-fit">
                {post.icon}
              </span>

              <span className={`text-lg md:text-xl font-extrabold ${post.color}`}>
                {post.category}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-emerald-600 leading-tight transition-colors">
                {post.title}
              </h3>

              <p className="text-base md:text-lg text-slate-500 leading-8 line-clamp-2">
                توضیحات کوتاه درباره این مقاله و نکات کلیدی برای زندگی سالم‌تر...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
