export function timeToSeconds(time: String): number {
  const [hours = "00", minutes = "00", seconds = "00"] = time.split(":");

  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;

  return hoursToSeconds + minutesToSeconds + Number(seconds);
}

export function secondsToTime(time: number): string {
  const stringHours = String(Math.floor(time / 3600) % 24).padStart(2, "0");
  const stringMinutes = String(Math.floor(time / 60) % 60).padStart(2, "0");
  const stringSeconds = String(time % 60).padStart(2, "0");

  return `${stringHours}:${stringMinutes}:${stringSeconds}`;
}
