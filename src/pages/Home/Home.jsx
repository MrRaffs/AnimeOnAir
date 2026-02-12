import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AnimeScheduleSection from "./components/AnimeSchedule";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-screen">
        <AnimeScheduleSection />
      </main>

      <Footer />
    </>
  );
}
