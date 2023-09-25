
// 懒加载
import React,{lazy} from 'react'
import Login from '../views/Login'
import {Navigate} from 'react-router-dom' 

const Home = lazy(()=>import('../views/Home'))
const Personal = lazy(()=>import('../views/Home/Personal'))

const withLoadingComponent = (comp:JSX.Element)=>(<React.Suspense fallback={<div>loading....</div>}>{comp}</React.Suspense>)

const routes = [
    {
        path:'/',
        element:<Navigate to='/login' />
    },
    {
        path:'/home',
        element:withLoadingComponent(<Home />)
    },
    {
        path:'/home',
        element:<Home />,
        children:[
            {
                path:'/home/personal',   
                element:withLoadingComponent(<Personal />),
            }
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    // 404页面
    {
        path:'*',
        element:<Login />
    },
]

export default routes