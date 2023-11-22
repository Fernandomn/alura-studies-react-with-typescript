export function timeToSeconds(time: String) {
  const [hours = "00", minutes = "00", seconds = "00"] = time.split(":");

  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;

  return hoursToSeconds + minutesToSeconds + Number(seconds);
}
