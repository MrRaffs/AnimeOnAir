import { getWeek } from "../utils/DateUtils";

export default function Schedule({ handleClick, selected }) {
  let days = getWeek();
  console.log("selecetd", selected);
  // console.log(days);
  return (
    <div className="flex flex-row justify-evenly min-w-sm w-4xl">
      {days.map((day) => (
        <Day
          key={day.date}
          day={day.day}
          date={day.date}
          month={day.month}
          handleClick={handleClick}
          selected={selected}
          //
        />
      ))}
    </div>
  );
}

function Day({ day, date, month, handleClick, selected }) {
  return (
    <button
      className={`hover:bg-secondary hover:cursor-pointer font-semibold px-2 rounded
        bg-${selected === day.toLowerCase() ? "btn-primary" : "bg-primary"}
        text-${selected === day.toLowerCase() ? "secondary" : "primary"}`}
      onClick={() => handleClick(day.toLowerCase())}
    >
      {console.log(selected, day.toLowerCase())}
      {console.log(selected === day.toLowerCase())}
      <div className="flex flex-col text-center">
        <span className=" text-xl">{day.slice(0, 3)}</span>
        <span className=" text-1xs">{`${date} ${month}`}</span>
      </div>
    </button>
  );
}
