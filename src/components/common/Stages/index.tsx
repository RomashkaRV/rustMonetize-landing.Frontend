"use client";

import { motion } from "framer-motion";

import Tabs from "./components/Tabs";

import { TABS } from "./constants";

import style from "./index.module.scss";

export const StagesLayer = () => {
  return (
    <div className={style.layer}>
      <div className={style.head}>
        <p className={style.title}>Поэтапная программа запуска</p>

        <div className={style.circleContainer}>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>

            <text>
              <textPath
                xlinkHref="#circlePath"
                textAnchor="middle"
                startOffset="50%"
                className={style.textPath}
              >
                7 направлений 7 направлений 7 направлений 7 направлений
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>

      <Tabs tabs={TABS} />
    </div>
  );
};
