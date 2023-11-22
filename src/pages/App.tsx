import { useState } from "react";
import Chronometer from "../components/Chronometer";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  const selecionaTarefa = (selectedTask: ITarefa) => {
    setSelecionado(selectedTask);
    setTarefas((oldTasks) =>
      oldTasks.map((oldTask) => ({
        ...oldTask,
        selecionado: oldTask.id === selectedTask.id,
      }))
    );

  };

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Chronometer selected={selecionado}/>
    </div>
  );
}

export default App;
