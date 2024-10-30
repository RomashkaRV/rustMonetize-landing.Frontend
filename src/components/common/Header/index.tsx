import Link from "next/link";

import { Button } from "components/core";

import style from "./index.module.scss";

export const Header = () => {
  const Links = [
    {
      title: "Программа",
      url: "/"
    },
    {
      title: "Заявка",
      url: "/"
    },
    {
      title: "Примеры",
      url: "/"
    },
    {
      title: "Вопросы",
      url: "/"
    },
    {
      title: "Отзывы",
      url: "/"
    }
  ];

  return (
    <header className={style.header}>
      <div className={style.header__navbar}>
        <p className={style.logo}>
          <span>g</span>Monetize
        </p>

        <div className={style.links}>
          {Links.map((item, index) => (
            <Link className={style.links__link} href={item.url} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <Button>Связаться</Button>
    </header>
  );
};
