import  { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import Cities from "./pages/Cities";
import CitiesDetails from "./pages/CitiesDetails";
import ViewMore from "./pages/ViewMore";


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
                { path: "/ViewMore",element: <ViewMore/>},
                { path: "/CitiesDetails",element: <CitiesDetails/>}

            ],
        },
    ]);

export default router