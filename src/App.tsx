import routes from './router'
import { useRoutes } from 'react-router-dom'
const App = () => {
    const outlet = useRoutes(routes)
    return <>{outlet}</>
}

export default App

// 0915 07-12
// 0916 13-21
// 0918 22-26
// 0919 27-31
// 0920 32-36
// 0921 37-42 
// 0922 43
// 0928 44-48 1.cavans login 
// 0929 49-53
// 0930 54-55
// 1001 56
