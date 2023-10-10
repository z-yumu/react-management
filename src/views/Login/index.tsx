import {useSelector,useDispatch} from 'react-redux'
import { increment, decrement } from '@/store/user'




const Login = ()=>{
    const { testVal } = useSelector((state:RootState)=>({testVal:state.user.testVal}))
    const dispatch:AppDispatch = useDispatch()
   
    return(
        <>
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <h1>{testVal}</h1>
        </>
    )
}
  
  export default Login