import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
className?: string;
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
	return (
		<div className={classNames(styles.q, {}, [className])}>
			
		</div>
	)
};


