const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const padZero = (val) => {
  return val.toString().padStart("2", "0");
};

const formatDate = (date) => {
  const today = day[date.getDay() - 1];
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}, ${today} ${date.getDate()} ${month}, ${date.getFullYear()}`;
};

module.exports.formatDate = formatDate;
