import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Specialties from "./pages/Specialties"
import Centers from "./pages/Centers"
import Consult from "./pages/Consult"
import Mag from "./pages/Mag"
import DoctorProfilePage from "./pages/DoctorProfilePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

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
            path="/doctor/:id"
            element={<DoctorProfilePage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
