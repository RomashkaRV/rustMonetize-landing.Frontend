"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";

import { Layout } from "components/core/Layout";

import { ImageCoin, ImageMoneyBag, ImageShadow } from "./_assets";

import style from "./index.module.scss";

export const MainLayer = () => {
  const moneyBag = {
    offscreen: {
      x: innerWidth
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        duration: 2
      }
    }
  };

  const coinLeft = {
    offscreen: {
      x: -400
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5
      }
    }
  };

  const coinTop = {
    offscreen: {
      y: -300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        duration: 2.2
      }
    }
  };

  return (
    <Layout className={style.layout}>
      <div className={style.layer}>
        <motion.p
          className={style.title}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            scale: {
              type: "spring"
            }
          }}
        >
          Магазин под ваш сервер
        </motion.p>

        <Image src={ImageShadow} alt="shadow" className={style.shadow} />

        <motion.div
          className={classNames(style.imageContainer, style.shop)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={moneyBag}>
            <Image src={ImageMoneyBag} alt="shop" />
          </motion.div>
        </motion.div>

        <motion.div
          className={classNames(style.imageContainer, style.coinTop)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={coinLeft}>
            <Image src={ImageCoin} alt="game" />
          </motion.div>
        </motion.div>

        <motion.svg className={style.stroke} viewBox="0 0 876 305">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeatType: "loop",
              repeatDelay: 1
            }}
            strokeWidth={4}
            strokeDasharray="0 1"
            fill="none"
            d="M2.00012 116C54.8001 37.9998 163.667 16.0004 213.5 12.5004C299.5 6.46025 419.631 32.4997 496 32.4998C545 32.4999 769.614 -35.5948 851.5 32.4999C899 71.9998 862.668 156 795.5 156C702 156 437 89.1888 419 199.5C405.978 279.301 372.5 309.5 175 251C114.5 233.08 129.14 150.495 253.5 130.975C479.5 95.5 398 275 446.5 302.475"
          />
        </motion.svg>

        <motion.div
          className={classNames(style.imageContainer, style.gift)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={coinTop}>
            <Image src={ImageCoin} alt="coin" />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};
