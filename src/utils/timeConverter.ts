export function convertTimestampToIST(timestamp: string) {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "Invalid timestamp";
  }

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    year: "2-digit",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);

  return formattedDate;
}
