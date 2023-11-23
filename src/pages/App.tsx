import { useState } from "react";
import Chronometer from "../components/Chronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        status:
          task.status === "completed"
            ? "completed"
            : task.id === selectedTask.id
            ? "selected"
            : "unselected",
      }))
    );
  };

  const endTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) =>
          task.id === selected.id ? { ...task, status: "completed" } : task
        )
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;
