import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";






export default function MainLayout() {
    return (
      
        <div className='w-full gap-10 justify-between min-h-screen bg-[#ebebeb] flex flex-col'>


       <NavBar/>

       <Outlet/>



        </div>
  
      );
}
