import { Theme, useTheme } from "app/providers/ThemeProvider";
import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './ThemeSwitcher.module.scss'
import DarkTheme from "shared/assets/icons/theme-dark.svg"
import LightTheme from "shared/assets/icons/theme-light.svg"
import { Button, ThemeButton } from "shared/ui/Button";

interface ThemeSwitcherProps {
	className?: string;
	themeBtn?: ThemeButton;
}
export const ThemeSwitcher = ({className, themeBtn}:ThemeSwitcherProps) => {
	const { toggleTheme, theme } = useTheme()

	return (
		<>
		<Button 
		className={classNames(styles.themeSwitcher, {}, [className])} 
		onClick={toggleTheme}
		theme={themeBtn}
		>
			{theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
		</Button>

		</>
	)
};


