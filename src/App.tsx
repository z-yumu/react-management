

import routes from "./router"
import { useRoutes } from 'react-router-dom'
function App() {
  const outlet = useRoutes(routes)
  return (
    <>
      {outlet}
    </>
  )
}

export default App

// 0915 07-12
// 0916 13-21
// 0918 22-26
// 0919 27-31
// 0920 32-36
// 0921 37-42 1.cavans login 2.how to use styled component
// 0922 43
// 0923  百万补贴
