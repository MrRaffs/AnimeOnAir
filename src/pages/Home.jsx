import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Schedule from "../components/Schedule";
import AnimeCards from "../components/AnimeCards";
import { getDay, getYear } from "../utils/DateUtils";

export default function Home() {
  const [day, setDay] = useState(getDay());
  function handleClickCard(id) {
    console.log("youclick", id);
  }

  function handleClickDay(day) {
    // console.log(day);
    setDay(day);
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-screen">
        <section className=" xs:px-4 md:px-15">
          <h2 className="px-4 lg:px-6 pb-4 font-bold text-xl">
            Airing {getYear()}
          </h2>
          <div className="day-selector-container  flex justify-center-safe mb-4">
            <Schedule handleClick={handleClickDay} selected={day} />
          </div>
          <div className="card-container w-full flex flex-col overflow-y-clip justify-center bg-bg-primary mb-6">
            <AnimeCards handleClick={handleClickCard} day={day} />
          </div>
        </section>
      </main>
      <footer className=" bg-bg-primary w-full p-2">
        <Footer />
      </footer>
    </>
  );
}
