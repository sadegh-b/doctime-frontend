import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";

import ConsultationConstipation from "./pages/ConsultationConstipation";
import ConsultationAddiction from "./pages/ConsultationAddiction";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main className="mx-auto max-w-7xl px-4 py-6">

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Doctors list */}
          <Route
            path="/doctors"
            element={<Doctors />}
          />

          {/* Doctor profile */}
          <Route
            path="/doctors/:id"
            element={<DoctorProfile />}
          />

          {/* Consultation pages */}
          <Route
            path="/consultation/constipation"
            element={<ConsultationConstipation />}
          />

          <Route
            path="/consultation/addiction"
            element={<ConsultationAddiction />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;
