import classNames from "classnames";
import type { FC } from "react";
import type { ButtonProps as HTMLButtonProps } from "react-html-props";

import style from "./index.module.scss";

export const Button: FC<HTMLButtonProps> = ({ className, ...props }) => (
  <button className={classNames([style.button, className])} {...props} />
);
