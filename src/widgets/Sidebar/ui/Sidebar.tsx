import { Button } from "@mui/material";
import React, { useState } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from './Sidebar.module.scss'

interface SidebarProps {
className?: string;
}
export const Sidebar = ({className}:SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={styles.themeSwitcher}>
				<ThemeSwitcher />
			</div>
			
		</div>
	)
};


