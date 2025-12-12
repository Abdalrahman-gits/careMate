function generateDays(numOfDays = 10, startDate = new Date()) {
  startDate.setHours(0, 0, 0, 0);
  const days = [];

  while (numOfDays--) {
    days.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return days;
}

function generateTime(date = new Date(), startHour = 10, endHour = 20) {
  const startDate = new Date(date);
  const endDate = new Date(date);
  const times = [];

  startDate.setHours(startHour, 0, 0, 0);
  endDate.setHours(endHour, 30, 0, 0);

  while (startDate <= endDate) {
    times.push(new Date(startDate));
    startDate.setMinutes(startDate.getMinutes() + 30);
  }

  return times;
}

export { generateDays, generateTime };
