import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Text.module.scss'

interface TextProps {
className?: string;
title?: string;
text?: string;
theme?: TextTheme
}

export enum TextTheme {
	PRIMARY= 'primary',
	ERROR= 'error',
}
export const Text = ({className, title, text, theme}:TextProps) => {
	return (
		<div className={classNames(styles.Text, {[styles[theme]]: true}, [className])}>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	)
};


