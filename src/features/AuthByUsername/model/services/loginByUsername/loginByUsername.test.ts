import axios from "axios"
import { loginByUsername } from "./loginByUsername"
import { Dispatch } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { userActions } from "entities/User"
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk"


jest.mock('axios')

const mockedAXIOS = jest.mocked(axios, true)


describe('loginByUsername.test', () => {
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  test('success login', async () => {
    const userValue = {username: '123', id: '1'}
    mockedAXIOS.post.mockReturnValue(Promise.resolve({data: userValue}))
    // const action = loginByUsername({username: '123', password: '123'})
    // const result = await action(dispatch, getState, undefined)

      const thunk = new TestAsyncThunk(loginByUsername)
      const result = await thunk.callThunk({username: '123', password: '123'})

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(mockedAXIOS.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })
  test('error login', async () => {
    const userValue = {}
    mockedAXIOS.post.mockReturnValue(Promise.resolve({status: 403}))

    // const action = loginByUsername({username: '123', password: '123'})
    // const result = await action(dispatch, getState, undefined)

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({username: '123', password: '123'})

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAXIOS.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Вы ввели неверный логин или пароль')
  })

  
})