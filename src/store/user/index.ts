import { createSlice } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface UserState {
  testVal: number
}

// 使用该类型定义初始 state
const initialState: UserState = {
  testVal: 9527
}

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    increment: state => {
      state.testVal += 1
    },
    decrement: state => {
      state.testVal -= 1
    },
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer