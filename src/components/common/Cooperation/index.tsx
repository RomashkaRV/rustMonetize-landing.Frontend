"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Layout } from "components/core/Layout";

import { ImageComfort } from "./_assets";

import { LIST_COOPERATION } from "./constants";

import style from "./index.module.scss";
import { variantsLi, variantsTitle, variantsUl } from "./variants";

export const CooperationLayer = () => {
  return (
    <Layout>
      <div className={style.layer}>
        <motion.div
          className={style.content}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={style.general} variants={variantsTitle}>
            <p className={style.title}>
              Сотрудничать c <span>g</span>Monetize
            </p>

            <Image src={ImageComfort} alt="comfort" />
          </motion.div>

          <motion.ul className={style.list} variants={variantsUl}>
            {LIST_COOPERATION.map((item, index) => (
              <motion.li
                className={style.item}
                key={index}
                variants={variantsLi}
                whileHover={{ scale: 0.95 }}
              >
                <p>
                  <span>{item.strong}</span>

                  {item.default}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </Layout>
  );
};
