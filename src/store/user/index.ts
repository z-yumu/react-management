import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface IUserState {
  testVal: number
}

// 使用该类型定义初始 state
const initialState: IUserState = {
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
  },
  // 异步
  extraReducers(builder) {
    builder.addCase(incrementAsync.fulfilled, (state) => {
      state.testVal = 996
    })
  },
})

export const incrementAsync = createAsyncThunk(
  'incrementAsync',
  async () => {
   
  }
)


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer