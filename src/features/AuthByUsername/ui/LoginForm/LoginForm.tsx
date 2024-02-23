import React, { useState } from "react"
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import styles from './LoginForm.module.scss'

interface LoginFormProps {
className?: string;
}
export const LoginForm = ({className}:LoginFormProps) => {
	const {t} = useTranslation()

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('false')

	const onChangeLogin = (val:string) => {
    setLogin(val)
  }
	return (
		<div className={classNames(styles.LoginForm, {}, [className])}>
			<Input onChange={onChangeLogin} autofocus placeholder={t('Введите логин')} className={styles.input} type="text" />
			<Input  placeholder={t('Введите пароль')}  className={styles.input} type="text" />
			<Button>
				Отправить
			</Button>
		</div>
	)
};


