import style from "./Watch.module.scss";

interface Props {
  time?: number;
}

const Watch = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTens, minuteOnes] = String(minutes).padStart(2, "0");
  const [secondTens, secondOnes] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minuteTens}</span>
      <span className={style.relogioNumero}>{minuteOnes}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTens}</span>
      <span className={style.relogioNumero}>{secondOnes}</span>
    </>
  );
};

export default Watch;
