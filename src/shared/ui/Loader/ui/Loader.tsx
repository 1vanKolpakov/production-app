import React from "react";
import { classNames } from "shared/lib/classNames/classnames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
  return (
    // classNames(styles.lds_grid, {}, [className])
    <div className={classNames(styles.lds_grid, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
