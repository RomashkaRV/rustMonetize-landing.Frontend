import Image from "next/image";

import { ImageArrow } from "./_assets";

import style from "./index.module.scss";

export const TaskLayer = () => {
  return (
    <div className={style.layer}>
      <div className={style.content}>
        <div className={style.layer__head}>
          <div className={style.title}>
            <p>Вы нам – задание,</p>

            <p>Мы вам – решение</p>
          </div>

          <Image src={ImageArrow} alt="arrow" />
        </div>

        <div className={style.layer__bottom}>
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
  );
};
