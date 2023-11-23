import { useEffect, useState } from "react";
import { secondsToTime, timeToSeconds } from "../../common/utils/date";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Chronometer.module.scss";
import Watch from "./Watch";

interface Props {
  selected?: ITask;
  endTask: () => void;
  updateCurrentSelectedTime: (newTime: string) => void;
}

const Chronometer = ({
  selected,
  endTask,
  updateCurrentSelectedTime,
}: Props) => {
  const [time, setTime] = useState<number>();
  const [running, setRunning] = useState(false); // Estado para rastrear se o contador está rodando

  useEffect(() => {
    if (selected?.totalTime) {
      setTime(timeToSeconds(String(selected.currentTime)));
    }
  }, [selected]);

  const startCounter = (): void => {
    setRunning(true);
  };

  const stopCounter = (): void => {
    setRunning(false);
  };

  const resetCounter = (): void => {
    if (selected?.totalTime) {
      setTime(timeToSeconds(String(selected.totalTime)));
    }
    setRunning(false);
  };

  // Efeito para controlar o intervalo de contagem
  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (running) {
      if (time) {
        intervalId = setInterval(() => {
          const newTime = time && time > 0 ? time - 1 : time;
          setTime(newTime);
          console.log("new time: ", secondsToTime(newTime));
          updateCurrentSelectedTime(secondsToTime(newTime));
        }, 1000);
      } else {
        endTask();
      }
    }

    // Limpar o intervalo quando o componente for desmontado ou o contador for parado
    return () => clearInterval(intervalId);
  }, [running, time, endTask, updateCurrentSelectedTime]);

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
