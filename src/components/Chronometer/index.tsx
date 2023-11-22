import { useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Chronometer.module.scss";
import Watch from "./Relogio";

interface Props {
  selected?: ITarefa;
}

const Chronometer = ({ selected }: Props) => {
  const [time, setTime] = useState<number>();

  if (selected?.tempo) {
    setTime(timeToSeconds(selected.tempo));
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
};

export default Chronometer;
