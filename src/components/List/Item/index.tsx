import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, status, id, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${
        status === "selected" ? style.itemSelecionado : ""
      } ${status === "completed" ? style.itemCompletado : ""}`.trim()}
      onClick={() =>
        status === "unselected" && selectTask({ task, time, status, id })
      }
    >
      <h3>{task}</h3>

      <span>{time}</span>
      {status === "completed" && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;
