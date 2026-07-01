const API = "http://localhost:3001/users"

export async function login(email: string, password: string) {

  const res = await fetch(
    `${API}?email=${email}&password=${password}`
  )

  const data = await res.json()

  if (data.length === 0) {
    throw new Error("Invalid credentials")
  }

  return data[0]
}

export async function register(user: {
  name: string
  email: string
  password: string
}) {

  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...user,
      role: "patient"
    })
  })

  return res.json()
}
