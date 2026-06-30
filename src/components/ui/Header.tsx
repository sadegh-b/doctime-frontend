import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("تهران");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}&city=${city}`);
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 sticky top-0 z-50 font-sans shadow-sm">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link to="/" className="text-3xl font-black text-blue-600 tracking-tight">
            Doc<span className="text-gray-800 dark:text-white">Time</span>
          </Link>

          <nav className="hidden lg:flex gap-8 text-[15px] font-semibold text-gray-700 dark:text-gray-300">
            <Link to="/" className="hover:text-blue-600 transition">صفحه اصلی</Link>
            <Link to="/specialties" className="hover:text-blue-600 transition">تخصص‌ها</Link>
            <Link to="/centers" className="hover:text-blue-600 transition">مراکز درمانی</Link>
            <Link to="/consult" className="hover:text-blue-600 transition">مشاوره آنلاین</Link>
            <Link to="/mag" className="hover:text-blue-600 transition">مجله سلامت</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <Link to="/login" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
            ورود / ثبت‌نام
          </Link>

          <Link
            to="/doctor-panel"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-md"
          >
            پنل پزشک
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-50 dark:bg-slate-800 border-t dark:border-slate-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-3">

          <div className="flex-1 flex bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl p-1 shadow-sm">

            <input
              type="text"
              placeholder="نام پزشک، تخصص یا بیماری..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-3 bg-transparent outline-none text-sm placeholder:text-gray-400 dark:text-white"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent px-3 outline-none text-sm dark:text-white"
            >
              <option>تهران</option>
              <option>مشهد</option>
              <option>زاهدان</option>
              <option>یزد</option>
              <option>کرمان</option>
              <option>اردبیل</option>
              <option>اصفهان</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition"
          >
            جستجو
          </button>
        </div>
      </div>
    </header>
  );
}
