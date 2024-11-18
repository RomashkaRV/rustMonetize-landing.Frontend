"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "components/core";
import { Layout } from "components/core/Layout";

import { NAV_MENU } from "./constants";

import style from "./index.module.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout
      className={classNames(style.layout, { [style.scrolled]: isScrolled })}
    >
      <header className={style.header}>
        <div className={style.header__navbar}>
          <Link href="/" className={style.logo}>
            <span>g</span>Monetize
          </Link>

          <div className={style.links}>
            {NAV_MENU.map((item, index) => (
              <Link className={style.links__link} href={item.url} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Button>Связаться</Button>
      </header>
    </Layout>
  );
};
