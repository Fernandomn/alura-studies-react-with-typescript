import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  initialState = { task: "", time: "00:00" };
  state = this.initialState;

  addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((oldState: ITask[]) => [
      ...oldState,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState(this.initialState);
  }

  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.addTask.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>

          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.task}
            onChange={(evento) =>
              this.setState({ ...this.state, tarefa: evento.target.value })
            }
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
            value={this.state.time}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>

        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
