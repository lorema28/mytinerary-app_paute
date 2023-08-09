import Home from "./pages/Home"
import NavLayaout from "./layouts/NavLayaout"
import { RouterProvider } from "react-router-dom"
import router from "./Router"

function App() {


  return (
    /* <NavLayaout>
       <Home />
 
     </NavLayaout>*/
    <RouterProvider router={router} />

  )

}

export default App
