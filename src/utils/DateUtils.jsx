const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export function getWeek() {
  let date = new Date();
  let days = [];
  const offset = date.getDay();
  date.setDate(date.getDate() - offset); //to sunday

  for (let i = 0; i < 7; i++) {
    let dateStr = date.toDateString().split(" ");
    let dateObj = {
      day: dayName[date.getDay()], //the api query require the fullname of the day
      month: dateStr[1],
      date: dateStr[2],
      year: dateStr[3],
    };
    // console.log(dateObj);
    days.push(dateObj);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getDay() {
  const date = new Date();
  const dayNum = date.getDay();
  const dayStr = dayName[dayNum];
  return dayStr.toLowerCase();
}

export function getYear() {
  const date = new Date();
  return date.getFullYear();
}
