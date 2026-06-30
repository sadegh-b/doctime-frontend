import HeroSection from "../components/home/HeroSection";
import SpecialtiesGrid from "../components/home/SpecialtiesGrid";
import TopDoctorsList from "../components/home/TopDoctorsList";
import ServicesCards from "../components/home/ServicesCards";
import HealthMagazine from "../components/home/HealthMagazine";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-50" dir="rtl">

      {/* Hero Section */}
      <HeroSection />

      {/* Specialties */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <SpecialtiesGrid />
      </section>

      {/* Top Doctors */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <TopDoctorsList />
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <ServicesCards />
      </section>

      {/* Health Magazine */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <HealthMagazine />
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Testimonials />
      </section>

    </div>
  );
}
