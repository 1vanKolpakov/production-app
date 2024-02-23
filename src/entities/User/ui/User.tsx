import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './User.module.scss'

interface UserProps {
className?: string;
}
export const User = ({className}:UserProps) => {
	return (
		<div className={classNames(styles.User, {}, [className])}>
			
		</div>
	)
};


