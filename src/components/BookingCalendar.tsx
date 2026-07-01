import { useEffect, useState } from "react"
import { getDoctorSchedule, getAppointments } from "../services/schedules"
import { bookAppointment } from "../services/appointments"
import TimeSlot from "./TimeSlot"

interface Props {
  doctorId: number
}

export default function BookingCalendar({ doctorId }: Props) {

  const [schedule, setSchedule] = useState<any[]>([])
  const [appointments, setAppointments] = useState<any[]>([])
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  useEffect(() => {

    async function loadData() {

      const sched = await getDoctorSchedule(doctorId)
      const apps = await getAppointments(doctorId)

      setSchedule(sched)
      setAppointments(apps)

      if (sched.length > 0) {
        setSelectedDay(sched[0].day)
      }

    }

    loadData()

  }, [doctorId])

  const currentSchedule = schedule.find(
    (s) => s.day === selectedDay
  )

  const bookedTimes = appointments
    .filter((a) => a.day === selectedDay)
    .map((a) => a.time)

  async function handleBooking() {

    if (!selectedTime) return

    await bookAppointment({
      doctorId,
      patientName: "کاربر",
      day: selectedDay,
      time: selectedTime
    })

    alert("نوبت با موفقیت رزرو شد")

  }

  return (

    <div className="space-y-6">

      <div className="flex gap-3">

        {schedule.map((day) => (

          <button
            key={day.id}
            onClick={() => setSelectedDay(day.day)}
            className="px-4 py-2 rounded-xl bg-blue-100"
          >
            {day.day}
          </button>

        ))}

      </div>

      <div className="grid grid-cols-3 gap-3">

        {currentSchedule?.slots.map((time: string) => (

          <TimeSlot
            key={time}
            time={time}
            disabled={bookedTimes.includes(time)}
            onSelect={setSelectedTime}
          />

        ))}

      </div>

      <button
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
      >
        رزرو نوبت
      </button>

    </div>
  )
}
