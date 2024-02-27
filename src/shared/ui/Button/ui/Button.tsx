import React, { ButtonHTMLAttributes, FC } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Button.module.scss'

export enum ThemeButton {
	CLEAR = "clear",
	OUTLINE = "outline",
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton
	square?: boolean
	size?: ButtonSize
}
export const Button: FC<ButtonProps> = (props) => {
	const { children, className,square, theme, size, ...otherProps } = props

	const mode: Record<string, boolean> = {
		[styles[theme]]: true,
		[styles.square]: square,
		[styles[size]]: true
	}
	
	return (
		<button className={classNames(styles.Button, mode, [className ])}
		{...otherProps}
		>
			{children}
			
		</button>
	)
};


