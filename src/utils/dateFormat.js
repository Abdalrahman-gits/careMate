function formatMonthDay(date) {
  return new Date(date)
    .toLocaleDateString("en-US", {
      month: "short",
      weekday: "short",
      day: "2-digit",
    })
    .split(", ");
}

function formatTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export { formatMonthDay, formatTime };
