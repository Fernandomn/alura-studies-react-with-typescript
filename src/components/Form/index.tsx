import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Form = ({ setTarefas }: Props) => {
  const initialTaskState = "";
  const initialTimeState = "00:00";
  const [task, setTask] = useState(initialTaskState);
  const [time, setTime] = useState(initialTimeState);

  const addTask = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    setTarefas((oldTasks: ITask[]) => [
      ...oldTasks,
      { task, time, status:'unselected', id: uuidv4() },
    ]);
    setTask(initialTaskState);
    setTime(initialTimeState);
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask.bind(this)}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>

        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={(evento) => setTask(evento.target.value)}
          placeholder="O que você quer estudar?"
          required
        ></input>
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>

        <input
          type="time"
          step={1}
          name="tempo"
          id="tempo"
          value={time}
          onChange={(evento) => setTime(evento.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        ></input>
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default Form;
