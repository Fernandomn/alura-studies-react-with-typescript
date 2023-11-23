export interface ITask {
  task: string;
  time: string;
  status: "unselected" | "selected" | "completed";
  id: string;
}
