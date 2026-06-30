import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-24 gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jfif"
              alt="DocTime Logo"
              className="w-24 h-24 object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black text-blue-700">
                داک تایم
              </span>
              <span className="text-sm font-semibold text-slate-500">
                سامانه نوبت‌دهی پزشکی
              </span>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-3 flex-1">

            <Link
              to="/doctors"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              نوبت‌دهی مطب
            </Link>

            <Link
              to="/consultation"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              مشاوره آنلاین
            </Link>

            <Link
              to="/clinics"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              مراکز درمانی
            </Link>

            <Link
              to="/home-services"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              خدمات پزشکی در محل
            </Link>

            <Link
              to="/health-magazine"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              مجلات سلامت
            </Link>

            <Link
              to="/doctors"
              className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition"
            >
              پزشکان
            </Link>

          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 shrink-0">

            {!user && (
              <>
                <Link
                  to="/login"
                  className="px-5 py-3 rounded-xl text-base font-extrabold text-blue-700 border border-blue-200 hover:bg-blue-50 transition"
                >
                  ورود
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-3 rounded-xl text-base font-extrabold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition"
                >
                  ثبت نام
                </Link>
              </>
            )}

            {user && (
              <div className="flex items-center gap-3">
                <span className="hidden xl:block text-sm font-bold text-slate-600">
                  {user.name}
                </span>

                {user.role === "patient" && (
                  <Link
                    to="/appointments"
                    className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                  >
                    نوبت‌های من
                  </Link>
                )}

                {user.role === "doctor" && (
                  <Link
                    to="/doctor/dashboard"
                    className="px-4 py-3 rounded-xl text-base font-extrabold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                  >
                    پنل پزشک
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="px-5 py-3 rounded-xl text-base font-extrabold text-white bg-red-500 hover:bg-red-600 transition"
                >
                  خروج
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
