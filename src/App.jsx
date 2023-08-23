import Home from "./pages/Home"
import NavLayout from "./layouts/NavLayout"
import { RouterProvider } from "react-router-dom"
import router from "./Router"
import { useState } from 'react'



function App() {

  const [count, setCount] = useState(0)

  return (
    
    /* <NavLayout>
       <Home />
 
     </NavLayout>*/
    <RouterProvider router={router} />

  )

}

export default App
