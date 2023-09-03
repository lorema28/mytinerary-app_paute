import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";






export default function MainLayout() {
    return (
      
         // <div className="w-full min-h-screen bg-white flex flex-col justify-between
     // sm:bg-red-300
      // md:bg-red-500
      //lg:bg-red-700
      //xl:bg-red-900 ">

      <div className="w-full min-h-screen bg-[#EBEBEB] font-sans flex flex-col justify-between ">


       <NavBar/>

       <Outlet/>



        </div>
  
      );
}
