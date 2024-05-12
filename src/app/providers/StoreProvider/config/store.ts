import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter/model/slice/counterSlice";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initState
  })
  //@ts-ignore
  store.reducerManager = reducerManager
  
  return store
}
