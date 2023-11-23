export interface ITask {
  task: string;
  totalTime: string;
  currentTime: string;
  status: "unselected" | "selected" | "completed";
  id: string;
}
