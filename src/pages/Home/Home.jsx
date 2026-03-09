import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimeScheduleSection from "./components/AnimeSchedule";

export default function Home() {
  return (
    <div className=" min-h-screen bg-bg-primary text-text-primary font-inter">
      <Navbar />

      <main className="max-w-screen">
        <AnimeScheduleSection />
      </main>

      <Footer />
    </div>
  );
}
