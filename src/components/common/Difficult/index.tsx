"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";

import { Layout } from "components/core/Layout";

import { IconPlus } from "assets";

import { ImageQuality, ImageFree } from "./_assets";

import { BLOCKS } from "./constants";

import style from "./index.module.scss";
import { variantsBlock, variantsList } from "./variants";

export const DifficultLayer = () => {
  return (
    <Layout className={style.layer}>
      <div className={style.content}>
        <p className={style.title}>
          Справимся <br /> с заданиями разной сложности
        </p>

        <motion.div
          className={style.list}
          variants={variantsList}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          {BLOCKS.map((item, index) => (
            <motion.div
              className={style.block}
              variants={variantsBlock}
              key={index}
            >
              <p className={style.block__title}>{item.title}</p>

              <Image src={IconPlus} alt="plus" className={style.block__plus} />

              <div className={classNames(style.block__hiddenInfo)}>
                {item.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={classNames(style.list, style.under)}
          variants={variantsList}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className={classNames(style.block, style.large)}
            variants={variantsBlock}
          >
            <div className={style.block__image}>
              <Image src={ImageQuality} alt="complete" />
            </div>

            <p className={style.block__description}>
              <span>Передадим ваши задачи студентам</span>, которые успешно
              прошли не менее 30−50% профильного курса. Они обладают нужными
              навыками и заинтересованы в результате.
            </p>

            <p className={style.block__description}>
              <span>Перед отправкой заказчику каждое решение проверят </span>
              эксперты Нетологии — опытные практики рынка.
            </p>
          </motion.div>

          <motion.div
            className={classNames(style.block, style.large)}
            variants={variantsBlock}
          >
            <p className={style.block__title}>Это бесплатно</p>

            <div className={style.block__image}>
              <Image src={ImageFree} alt="free" />
            </div>

            <p className={style.block__description}>
              <span>Вам нужно будет только дать студентам обратную связь</span>,
              а при использовании работы — рекомендательное письмо автору.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};
