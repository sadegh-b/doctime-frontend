import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 11) {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("user_phone", phone);
      navigate(redirectPath);
    } else {
      alert("لطفاً شماره موبایل معتبر وارد کنید");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" dir="rtl">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 w-full max-w-md">
          <h2 className="text-3xl font-black text-slate-800 mb-2 text-center">ورود به داک‌تایم</h2>
          <p className="text-slate-500 text-center mb-8">برای رزرو نوبت، شماره موبایل خود را وارد کنید</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">شماره موبایل</label>
              <input
                type="text"
                placeholder="09123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all text-center tracking-widest"
              />
            </div>
            <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
              تایید و ورود
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
