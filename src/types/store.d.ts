// 类型声明文件不要直接使用引入import,使用import('@/store')

// ReturnType<T> -- 获取函数返回值类型。
type RootState = ReturnType<typeof import('@/store').getState>

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function
}
