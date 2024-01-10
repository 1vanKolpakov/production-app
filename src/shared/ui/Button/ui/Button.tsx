import React, { ButtonHTMLAttributes, FC } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = "clear",
	OUTLINE = "outline"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
	const { children, className, theme, ...otherProps } = props
	return (
		<button className={classNames(styles.Button, {}, [className, styles[theme]])}
		{...otherProps}
		>
			{children}
		</button>
	)
};


