import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

import { Button } from "../Button";

import style from "./index.module.scss";

interface ModalProps {
  onClose: () => void;
  className?: string;
}

export const Modal = ({ onClose, className }: ModalProps) => {
  return (
    <motion.div
      className={classNames(style.modal, className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.overlay} onClick={() => onClose()} />

      <div className={style.wrapper}>
        <div className={style.content}>
          <p className={style.title}>Заявка</p>

          <div className={style.actions}>
            <input type="text" placeholder="ФИО" />

            <input type="text" placeholder="Телефон" />

            <Button className={style.button}>Оставить заявку</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
