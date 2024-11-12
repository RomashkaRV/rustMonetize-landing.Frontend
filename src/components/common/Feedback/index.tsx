"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button, Layout } from "components/core";

import { ImageAtom } from "./_assets";

import style from "./index.module.scss";
import { variantsImage } from "./variants";

export const FeedbackLayer = () => {
  return (
    <Layout className={style.layer}>
      <motion.div
        className={style.content}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className={style.general}>
          <div className={style.head}>
            <p className={style.head__title}>Оставьте заявку</p>

            <p className={style.head__description}>
              Менеджер свяжется с вами в течение 3 рабочих дней для уточнения
              деталей
            </p>
          </div>

          <div className={style.bottom}>
            <Button className={style.bottom__button}>Оставить заявку</Button>

            <p className={style.bottom__privacy}>
              Нажимая кнопку, вы принимаете
              <span>условия политики и пользовательского соглашения</span>
            </p>
          </div>
        </div>

        <motion.div variants={variantsImage}>
          <Image src={ImageAtom} alt="atom" />
        </motion.div>
      </motion.div>
    </Layout>
  );
};
