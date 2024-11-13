import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Layout } from "components/core";

import { IconPlus } from "assets";

import { QUESTIONS } from "./constants";

import style from "./index.module.scss";
import { variantsQuestion, variantsQuestions } from "./variants";

export const QuestionsLayer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout className={style.layer}>
      <motion.div
        className={style.content}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
      >
        <p className={style.title}>Отвечаем на вопросы</p>

        <motion.div className={style.questions} variants={variantsQuestions}>
          {QUESTIONS.map((item, index) => (
            <motion.div
              key={index}
              className={style.question}
              variants={variantsQuestion}
            >
              <div className={style.question__content}>
                <p className={style.question__title}>{item.question}</p>

                <p
                  className={classNames(style.question__answer, {
                    [style.question__answerOpen]: openIndex === index
                  })}
                >
                  {item.answer}
                </p>
              </div>

              <Image
                src={IconPlus}
                alt="open"
                className={style.open}
                onClick={() => toggleAnswer(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};
