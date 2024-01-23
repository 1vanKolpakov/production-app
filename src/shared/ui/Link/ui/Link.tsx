import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Link.module.scss'

interface LinkProps {
className?: string;
}
export const Link = ({className}:LinkProps) => {
	return (
		<div className={classNames(styles.Link, {}, [className])}>
			
		</div>
	)
};


