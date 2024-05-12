import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import React, { FC, useEffect } from "react"
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry =[ StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  children: React.ReactNode,
  removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount
  } = props

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      console.log([name, reducer])
      store.reducerManager.add(name, reducer)
      dispatch({type: `@INIT ${name} modal`})
    })
    
  
    return () => {
      if(removeAfterUnmount){
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({type: `@INIT ${name} modal`})
        })
      }
    }
  }, [])
  return (
    <>
      {children}
    </>
  )
};


