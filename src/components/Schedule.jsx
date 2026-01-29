import { getWeek } from "../utils/DateUtils";

export default function Schedule({ handleClick }) {
  let days = getWeek();

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
          //
        />
      ))}
    </div>
  );
}

function Day({ day, date, month, handleClick }) {
  return (
    <button
      className="hover:bg-secondary font-semibold px-2 rounded"
      onClick={() => handleClick(day.toLowerCase())}
    >
      <div className="flex flex-col text-center">
        <span className=" text-xl">{day.slice(0, 3)}</span>
        <span className=" text-1xs">{`${date} ${month}`}</span>
      </div>
    </button>
  );
}
