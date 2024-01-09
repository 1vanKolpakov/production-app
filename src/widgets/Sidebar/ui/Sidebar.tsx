import { Button } from "@mui/material";
import React, { useState } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import styles from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
className?: string;
}
export const Sidebar = ({className}:SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const { t } = useTranslation()

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>{collapsed ? `${t('Открыть')}` : `${t('Скрыть')}`}</button>
			<div className={styles.themeSwitcher}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			
		</div>
	)
};

