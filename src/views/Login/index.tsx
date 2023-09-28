import {useSelector,useDispatch} from 'react-redux'




const Login = ()=>{
    const {test} = useSelector((state:RootState)=>({test:state.test}))
    const dispatch = useDispatch()
    const chanageTest = ()=>{
        dispatch({type:'changeTest',val:'8848'})
    }
    return(
        <>
            <h1 onClick={chanageTest}>{test}</h1>
        </>
    )
}
  
  export default Login