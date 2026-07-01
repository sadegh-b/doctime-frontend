const API = "http://localhost:3001"

export async function getDoctorSchedule(doctorId: number) {

  const res = await fetch(
    `${API}/schedules?doctorId=${doctorId}`
  )

  if (!res.ok) {
    throw new Error("Failed to load schedule")
  }

  return res.json()
}

export async function getAppointments(doctorId: number) {

  const res = await fetch(
    `${API}/appointments?doctorId=${doctorId}`
  )

  if (!res.ok) {
    throw new Error("Failed to load appointments")
  }

  return res.json()
}
