import { timeToSeconds } from "../../common/utils/date";
import Botao from "../Botao";
import style from "./Cronometro.module.scss";
import Relogio from "./Relogio";

const Cronometro = () => {
  console.log("conversão:", timeToSeconds("01:02:03"));

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Relogio />
      </div>

      <Botao>Começar</Botao>
    </div>
  );
};

export default Cronometro;
