import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import AnimeCards from "../components/AnimeCards";
import { getDay } from "../utils/DateUtils";

export default function Home() {
  const [day, setDay] = useState(getDay());
  function handleClickCard(id) {
    console.log("youclick", id);
  }

  function handleClickDay(day) {
    console.log(day);
    setDay(day);
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-screen">
        <section className="day-selector-container  flex justify-center-safe mb-4">
          <Schedule handleClick={handleClickDay} />
        </section>
        <section className="card-container w-full flex overflow-y-clip justify-center bg-bg-primary mb-6">
          <AnimeCards handleClick={handleClickCard} day={day} />
        </section>
      </main>
      <footer className=" bg-bg-primary w-full p-2">
        <Footer />
      </footer>
    </>
  );
}
