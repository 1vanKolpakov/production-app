import React from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from "shared/ui/Button";

interface LangSwitcherProps {
className?: string;
}
export const LangSwitcher = ({className}:LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
		<Button 
		onClick={toggle}
		theme={ThemeButton.CLEAR}
		className={styles.langSwitcher}
		>
			{t('Язык')}
		</Button>
  )
};


