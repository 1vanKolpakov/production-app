import React from "react"
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from "shared/ui/Button";
import styles from './PageError.module.scss'

interface PageErrorProps {
className?: string;
}
export const PageError = ({className}:PageErrorProps) => {
	const { t } = useTranslation()
	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={classNames(styles.PageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>
				{t('Обновить страницу')}
			</Button>
		</div>
	)
};


