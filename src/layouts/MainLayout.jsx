import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";






export default function MainLayout() {
    return (
      
      <div className="w-full min-h-screen bg-[#EBEBEB] font-sans flex flex-col justify-between">


       <NavBar/>

       <Outlet/>



        </div>
  
      );
}
