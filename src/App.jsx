
import { RouterProvider } from "react-router-dom"
import router from "./Router"
import { Provider } from 'react-redux';
import store from './store/store';



function App() {



  return (
    
    /* <NavLayout>
       <Home />
 
     </NavLayout>*/
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  )

}

export default App
