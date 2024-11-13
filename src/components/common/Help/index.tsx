import { motion } from "framer-motion";
import Image from "next/image";

import { Layout } from "components/core";

import { ImageMen, ImageShadow } from "./_assets";

import { variantsImage } from "../Feedback/variants";

import style from "./index.module.scss";

export const HelpLayout = () => {
  return (
    <Layout className={style.layout}>
      <motion.div
        className={style.content}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className={style.left}>
          <p className={style.title}>
            <span>g</span>Monetize может помочь и в других направлениях
          </p>

          <div className={style.description}>
            <p>
              С нашей помощью вы найдёте специалистов в разработке, маркетинге,
              дизайне, аналитике, менеджменте и онлайн-образовании.
            </p>

            <p>Это могут быть стажёры, сотрудники в штат или фрилансеры.</p>
          </div>
        </div>

        <motion.div variants={variantsImage} className={style.images}>
          <Image src={ImageMen} alt="men" className={style.men} />

          <Image src={ImageShadow} alt="shadow" className={style.shadow} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};
