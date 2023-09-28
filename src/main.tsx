import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化
import 'reset-css'
// UI样式
// 全局样式
import { GlobalStyle } from './style'
// 组件样式
import App from './App.tsx'
import { BrowserRouter as Router} from 'react-router-dom'
// 状态管理
import {Provider} from 'react-redux'
import store from '@/store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
)
