import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Specialties from "./pages/Specialties"
import Centers from "./pages/Centers"
import Consult from "./pages/Consult"
import Mag from "./pages/Mag"
import Doctors from "./pages/Doctors"
import DoctorProfilePage from "./pages/DoctorProfilePage"
import MyAppointments from "./pages/MyAppointments"
import DoctorDashboard from "./pages/dashboard/DoctorDashboard"
import DoctorAppointments from "./pages/dashboard/DoctorAppointments"
import DoctorSchedule from "./pages/dashboard/DoctorSchedule"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/search"
            element={<SearchResults />}
          />

          <Route
            path="/specialties"
            element={<Specialties />}
          />

          <Route
            path="/centers"
            element={<Centers />}
          />

          <Route
            path="/consult"
            element={<Consult />}
          />

          <Route
            path="/mag"
            element={<Mag />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/doctors/:id"
            element={<DoctorProfilePage />}
          />

          <Route
            path="/appointments"
            element={<MyAppointments />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}
<Route path="/dashboard" element={<DoctorDashboard />} />
<Route path="/dashboard/appointments" element={<DoctorAppointments />} />
<Route path="/dashboard/schedule" element={<DoctorSchedule />} />
<Route
 path="/dashboard"
 element={
  <ProtectedRoute>
    <DoctorDashboard />
  </ProtectedRoute>
 }
/>

export default App
