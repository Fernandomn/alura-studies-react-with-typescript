import { useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Chronometer.module.scss";
import Watch from "./Watch";

interface Props {
  selected?: ITask;
}

const Chronometer = ({ selected }: Props) => {
  const [time, setTime] = useState<number>(
    timeToSeconds(String(selected?.time))
  );

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default Chronometer;
