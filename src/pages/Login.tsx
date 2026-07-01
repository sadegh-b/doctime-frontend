import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/auth"
import { useAuth } from "../context/AuthContext"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { loginUser } = useAuth()

  async function handleLogin() {

    try {

      const user = await login(email, password)

      loginUser(user)

      navigate("/")

    } catch {

      alert("ایمیل یا رمز اشتباه است")

    }

  }

  return (

    <div className="flex justify-center mt-20">

      <div className="bg-white p-10 rounded-xl shadow w-96">

        <h1 className="text-xl font-bold mb-6">
          ورود
        </h1>

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
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          ورود
        </button>

      </div>

    </div>

  )
}
