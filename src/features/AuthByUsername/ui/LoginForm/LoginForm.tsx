import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import React, { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, useStore } from "react-redux";
import { classNames } from "shared/lib/classNames/classnames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text, TextTheme } from "shared/ui/Text";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  // const {username, password, error, isLoading} = loginForm

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  const { t } = useTranslation();

  console.log(initialReducers)
  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          autofocus={true}
          placeholder={t("Введите username")}
          type="text"
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t("Введите пароль")}
          type="text"
          onChange={onChangePassword}
          value={password}
        />
        <Button
          disabled={isLoading}
          onClick={onLoginClick}
          className={styles.btn}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
