import React from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string
}

export default function LoginForm({className} : LoginFormProps) {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input 
      autofocus={true}
      placeholder={t('Введите username')}
      type="text"/>
      <Input 
      placeholder={t('Введите пароль')}
      type="text"/>
      <Button className={styles.btn}>
        {t('Войти')}
      </Button>
    </div>
  )
}