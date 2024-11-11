import classNames from "classnames";
import type { FC } from "react";

import type { LayoutProps } from "./types";

import style from "./index.module.scss";

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={classNames(style.layout, className)}>
      <div className={style.content}>{children}</div>
    </div>
  );
};