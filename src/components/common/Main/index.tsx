import Image from "next/image";

import {
  ImageGame,
  ImageGift,
  ImageShadow,
  ImageShop,
  ImageStroke
} from "./_assets";

import style from "./index.module.scss";

export const MainLayer = () => {
  return (
    <div className={style.layer}>
      <p className={style.title}>Магазин под ваш сервер</p>

      <Image src={ImageShadow} alt="shadow" className={style.shadow} />

      <Image src={ImageShop} alt="shadow" className={style.shop} />

      <Image src={ImageGame} alt="shadow" className={style.game} />

      <Image src={ImageStroke} alt="shadow" className={style.stroke} />

      <Image src={ImageGift} alt="shadow" className={style.gift} />
    </div>
  );
};
