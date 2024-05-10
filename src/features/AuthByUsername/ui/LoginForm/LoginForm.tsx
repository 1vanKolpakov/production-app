import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({className} : LoginFormProps) => {
  const dispatch = useDispatch()
  const loginForm = useSelector(getLoginState)

  const {username, password, error, isLoading} = loginForm

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, password, username])

  const { t } = useTranslation()
  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')}/>
      {error && (
        <Text text={error} theme={TextTheme.ERROR} />
      )}
      <Input 
      autofocus={true}
      placeholder={t('Введите username')}
      type="text"
      onChange={onChangeUsername}
      value={username}
      />
      <Input 
      placeholder={t('Введите пароль')}
      type="text"
      onChange={onChangePassword}
      value={password}
      />
      <Button disabled={isLoading} onClick={onLoginClick} className={styles.btn}>
        {t('Войти')}
      </Button>
    </div>
  )
})