import { useState } from "react"
import { register } from "../services/auth"
import { useNavigate } from "react-router-dom"

export default function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleRegister() {

    await register({
      name,
      email,
      password
    })

    alert("ثبت نام موفق")

    navigate("/login")

  }

  return (

    <div className="flex justify-center mt-20">

      <div className="bg-white p-10 rounded-xl shadow w-96">

        <h1 className="text-xl font-bold mb-6">
          ثبت نام
        </h1>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          ثبت نام
        </button>

      </div>

    </div>

  )
}
