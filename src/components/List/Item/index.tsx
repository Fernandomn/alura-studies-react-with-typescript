import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({
  task,
  totalTime,
  currentTime,
  status,
  id,
  selectTask,
}: Props) => {
  return (
    <li
      className={`${style.item} ${
        status === "selected" ? style.itemSelecionado : ""
      } ${status === "completed" ? style.itemCompletado : ""}`.trim()}
      onClick={() =>
        status === "unselected" &&
        selectTask({ task, totalTime, currentTime, status, id })
      }
    >
      <h3>{task}</h3>

      <span>
        {currentTime} / {totalTime}
      </span>
      {status === "completed" && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;
