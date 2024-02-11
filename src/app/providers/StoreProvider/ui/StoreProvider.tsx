import { DeepPartial } from "@reduxjs/toolkit";
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { classNames } from 'shared/lib/classNames/classnames'
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";
import styles from './StoreProvider.module.scss'

interface StoreProviderProps {
  children?: ReactNode;
  initState?: DeepPartial<StateSchema>
}
const StoreProvider = ({children, initState}:StoreProviderProps) => {

  const store = createReduxStore(initState as StateSchema)
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

export default StoreProvider;
