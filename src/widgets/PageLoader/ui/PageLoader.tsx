import React from "react";
import { classNames } from "shared/lib/classNames/classnames";
import { Loader } from "shared/ui/Loader";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
