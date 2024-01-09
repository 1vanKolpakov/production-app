import React from "react";
import { classNames } from "shared/lib/classNames/classnames";
import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={styles.lds_grid}>
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
