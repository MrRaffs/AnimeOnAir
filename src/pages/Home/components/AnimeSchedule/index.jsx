import { useState } from "react";
import { getDay, getYear } from "../../../../utils/DateUtils";
import AnimeGrid from "./AnimeGrid";
import DaySelector from "./DaySelector";

export default function AnimeScheduleSection() {
  const [day, setDay] = useState(getDay());
  function handleClickDay(day) {
    setDay(day);
  }
  function handleClickCard(id) {
    console.log("youclick", id);
  }

  return (
    <section className=" xs:px-4 md:px-15">
      <h2 className="px-4 xl:mx-20 pb-4 font-bold text-xl">
        Airing {getYear()}
      </h2>

      <DaySelector handleClick={handleClickDay} selected={day} />

      <AnimeGrid handleClick={handleClickCard} day={day} />
    </section>
  );
}
