import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classnames'
import AppLink from 'shared/ui/Applink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Navbar.module.scss'
interface NavbarProps {
  className?: string;

}

export function Navbar({className}: NavbarProps) {
  
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      
      <div className={styles.links}>
        <AppLink className={styles.mainLink} to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}> О сайте</AppLink>
      </div>
      
    </div>
  )
}

