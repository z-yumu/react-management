import routes from './router'
import { useRoutes } from 'react-router-dom'
const App = () => {
    const outlet = useRoutes(routes)
    return <>{outlet}</>
}

export default App


