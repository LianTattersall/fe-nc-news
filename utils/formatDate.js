export function formatDate(date) {
  const months = {
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const dateTime = date.split("T");
  let date2 = dateTime[0].split("-");
  date2 = date2.map((date) => Number(date));
  const time = dateTime[1].split(":");
  return `${date2[2]} ${months[date2[1]]} ${date2[0]}, ${time[0]}:${time[1]}`;
}
