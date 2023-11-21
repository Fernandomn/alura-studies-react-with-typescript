import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  initialState = { tarefa: "", tempo: "00:00" };
  state = this.initialState;

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((oldState: ITarefa[]) => [
      ...oldState,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState(this.initialState);
  }

  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>

          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
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
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>

        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
