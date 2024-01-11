import React, { FC } from "react"
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
className?: string;
theme?: AppLinkTheme;
}
 const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, 
    className, 
    children, 
    theme=AppLinkTheme.PRIMARY, 
    ...otherProps} = props
  return (
    <Link 
    to={to}
    className={classNames(styles.appLink, {}, [className, styles[theme]])}
    {...otherProps}
    >
      {children}
    </Link>
  )
};


export default AppLink;