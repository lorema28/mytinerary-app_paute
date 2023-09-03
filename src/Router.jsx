import  { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import NavLayout from "./layouts/NavLayout"
import Itineraries from "./pages/Itineraries"
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import FormSignUp from "./pages/FormSignUp"
import FormSignIn from "./pages/FormSignIn"
import NotFound from "./pages/Notfound";


const router = createBrowserRouter(
    [

        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/index", element: <Home /> },
                { path: "/home",element: <Home/>},
                { path: "/Cities",element: <Cities/>},
                { path: "/city/:city_id", element: <CityDetail />},
                { path: "/itineraries", element: <Itineraries />},
                { path: "/signin", element: <SignIn />},
                { path: "/signup", element: <SignUp />},
                { path: "/auth/signup", element: <FormSignUp /> },
                { path: "/auth/signin", element: <FormSignIn /> },
                { path: "/*", element: <NotFound />}


            ],
        },
        {
            path: "/",
            element: <NavLayout />,
            children: [{
              path: "/hola/layout", element: <Itineraries />
            }],
          },
          {
            path: "/itineraries",
            element: <Itineraries />
          }
        ]);
        

export default router