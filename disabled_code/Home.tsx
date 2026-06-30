import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection"; // ایمپورت جدید
import SpecialtiesGrid from "../components/home/SpecialtiesGrid";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsSection /> {/* استفاده از کامپوننت جدید */}
      <SpecialtiesGrid />
      {/* بقیه کامپوننت‌ها اینجا اضافه می‌شوند */}
    </div>
  );
}
