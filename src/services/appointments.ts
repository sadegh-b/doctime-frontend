const API = "http://localhost:3001/appointments"

export async function bookAppointment(data: {
  doctorId: number
  patientName: string
  day: string
  time: string
}) {

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error("Booking failed")
  }

  return res.json()
}
