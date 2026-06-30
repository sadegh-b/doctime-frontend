import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function DoctorDashboard() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [slots, setSlots] = useState([]);
  const [doctorId, setDoctorId] = useState(null);
  const [loading, setLoading] = useState(false);

  // واکشی اطلاعات پزشک
  const loadDoctor = async () => {
    try {
      const res = await axiosClient.get("/doctors/me");
      setDoctorId(res.data.id);
      loadSlots(res.data.id);
    } catch (err) {
      console.error("خطا در بارگذاری اطلاعات پزشک:", err);
    }
  };

  // واکشی زمان‌های موجود (Slots)
  const loadSlots = async (id) => {
    try {
      setLoading(true);
      const res = await axiosClient.get(`/doctors/${id}/availability`);
      setSlots(res.data);
    } catch (err) {
      console.error("خطا در بارگذاری زمان‌ها:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDoctor();
  }, []);

  // ایجاد زمان‌بندی جدید
  const createSlot = async () => {
    if (!date || !startTime || !endTime) return;
    try {
      await axiosClient.post(`/doctors/${doctorId}/availability`, {
        date,
        start_time: startTime,
        end_time: endTime
      });
      loadSlots(doctorId);
    } catch (err) {
      console.error("خطا در ایجاد زمان:", err);
    }
  };

  // تولید خودکار زمان‌ها
  const generateSlots = async () => {
    if (!date || !startTime || !endTime || !duration) return;
    try {
      await axiosClient.post(`/doctors/${doctorId}/availability/auto-generate`, {
        date,
        start_time: startTime,
        end_time: endTime,
        slot_duration_minutes: parseInt(duration)
      });
      loadSlots(doctorId);
    } catch (err) {
      console.error("خطا در تولید خودکار:", err);
    }
  };

  // حذف زمان‌بندی
  const deleteSlot = async (slotId) => {
    if (!window.confirm("آیا از حذف این بازه مطمئنی؟")) return;
    try {
      await axiosClient.delete(`/availability/${slotId}`);
      loadSlots(doctorId);
    } catch (err) {
      console.error("خطا در حذف زمان:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" dir="rtl">
      <h1 className="text-3xl font-black text-slate-800 mb-8">داشبورد پزشک</h1>

      {/* بخش افزودن زمان */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 mb-8">
        <h2 className="font-black text-lg text-slate-800 mb-6">مدیریت نوبت‌ها</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500" />
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500" />
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500" />
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500" placeholder="مدت (دقیقه)" />
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={createSlot} className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">افزودن تکی</button>
          <button onClick={generateSlots} className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition">تولید خودکار</button>
        </div>
      </div>

      {/* لیست زمان‌ها */}
      <div>
        <h2 className="font-black text-lg text-slate-800 mb-4">بازه های زمانی فعال</h2>
        {loading ? (
          <p className="text-center py-10 text-slate-400">در حال دریافت اطلاعات...</p>
        ) : slots.length === 0 ? (
          <div className="text-center py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-slate-500">
            هیچ بازه زمانی ثبت نشده است.
          </div>
        ) : (
          <div className="space-y-3">
            {slots.map((slot) => (
              <div key={slot.id} className="bg-white border border-slate-100 p-5 rounded-2xl flex justify-between items-center shadow-sm">
                <div className="text-slate-700 font-bold">
                  {slot.date} | <span className="text-blue-600">{slot.start_time} - {slot.end_time}</span>
                </div>
                <button onClick={() => deleteSlot(slot.id)} className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-bold text-sm transition">حذف</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
