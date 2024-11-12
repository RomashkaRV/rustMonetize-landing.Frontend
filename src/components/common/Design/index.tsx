import Image from "next/image";

import { Layout } from "components/core";

import { ImageDesign, ImageShadow } from "./_assets";

import style from "./index.module.scss";

export const DesignLayer = () => {
  const STEPS = [
    "Оставьте заявку",
    "С вами свяжется менеджер",
    "Вместе сформируете техническое задание",
    "Ждите готовое решение в срок от 2 недель"
  ];

  return (
    <Layout className={style.layer}>
      <div className={style.content}>
        <div className={style.head}>
          <p className={style.title}>Как получить готовое</p>

          <Image src={ImageDesign} alt="design" className={style.design} />

          <Image src={ImageShadow} alt="shadow" className={style.shadow} />
        </div>

        <div className={style.steps}>
          {STEPS.map((item, index) => (
            <div className={style.step} key={index}>
              <p className={style.step__number}>{index + 1}</p>

              <p className={style.step__title}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
