"use client";

import Image from "next/image";

import { ImageArrow, ImageShadow } from "./_assets";

import { Layout } from "../../core/Layout";

import style from "./index.module.scss";

export const TaskLayer = () => {
  return (
    <Layout>
      <div className={style.layer}>
        <Image src={ImageShadow} alt="shadow" className={style.shadow} />

        <div className={style.content}>
          <div className={style.content__head}>
            <div className={style.title}>
              <p>Вы нам – заявку,</p>

              <p>Мы вам – магазин</p>
            </div>

            <Image src={ImageArrow} alt="arrow" />
          </div>

          <div className={style.content__bottom}>
            <p>
              Доверьте нам проекты в обмен на качественный результат — без
              расходов бюджета.
            </p>

            <p>
              Работаем с малым, средним и крупным бизнесом, стартапами и
              благотворительными организациями.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
