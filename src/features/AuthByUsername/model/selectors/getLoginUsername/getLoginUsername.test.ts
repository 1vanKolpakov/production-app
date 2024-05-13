import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginError.test', () => {
  test('should return err', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('123')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})