import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Chronometer.module.scss";
import Watch from "./Watch";

interface Props {
  selected?: ITask;
  endTask: () => void;
}

const Chronometer = ({ selected, endTask }: Props) => {
  const [time, setTime] = useState<number>();
  const [running, setRunning] = useState(false); // Estado para rastrear se o contador está rodando

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(String(selected.time)));
    }
  }, [selected]);

  const startCounter = () => {
    setRunning(true);
  };

  const stopCounter = () => {
    setRunning(false);
  };

  const resetCounter = () => {
    if (selected?.time) {
      setTime(timeToSeconds(String(selected.time)));
    }
    setRunning(false);
  };

  // Efeito para controlar o intervalo de contagem
  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (running) {
      if (time) {
        intervalId = setInterval(() => {
          setTime((prevCounter) =>
            prevCounter && prevCounter > 0 ? prevCounter - 1 : prevCounter
          );
        }, 1000);
      } else {
        endTask();
      }
    }

    // Limpar o intervalo quando o componente for desmontado ou o contador for parado
    return () => clearInterval(intervalId);
  }, [running, time, endTask]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>

      <div className={style.buttonWrapper}>
        <Button onClick={startCounter}>Começar</Button>
        <Button onClick={stopCounter}>Parar</Button>
        <Button onClick={resetCounter}>Reiniciar</Button>
      </div>
    </div>
  );
};

export default Chronometer;
