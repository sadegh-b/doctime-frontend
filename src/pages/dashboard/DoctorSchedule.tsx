import { useState } from "react"

export default function DoctorSchedule() {

  const [day, setDay] = useState("")
  const [time, setTime] = useState("")

  async function addSlot() {

    await fetch("http://localhost:3001/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        doctorId: 1,
        day,
        slots: [time]
      })
    })

    alert("زمان اضافه شد")

  }

  return (

    <div className="p-10">

      <h1 className="text-2xl font-black mb-6">
        تنظیم ساعات کاری
      </h1>

      <div className="flex gap-4">

        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border px-4 py-2 rounded"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border px-4 py-2 rounded"
        />

        <button
          onClick={addSlot}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          افزودن
        </button>

      </div>

    </div>

  )
}
