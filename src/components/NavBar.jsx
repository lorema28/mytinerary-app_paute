import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login"
import Logout from "./Logout"
import Display from "./Display";
import Label from "./Label";
import Swal from "sweetalert2";


import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;



export default function NavBar() {
  const navigate = useNavigate();
   let [show,setShow] = useState(false)
   let photo = useSelector((store) => store.users.user?.photo);

   let dispatch = useDispatch();

   let options = [
    { to: "/", title: "Home", show: true },
    { to: "/cities", title: "Cities", show: photo? true : false,},
     {to: "/profile",title: "Profile", show: photo? true : false,},
     {to: "/auth/signin", title: <Login/>,color: "white", backgroundColor:"#4F46E5",
     show: photo? false : true,},
     {
      title: <Logout/>,
      show: photo ? true : false,
      onClick: () => {
        dispatch(signout())
        .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged out!",
              text: '👋 Bye, See you soon!',
            });
            navigate("/");
        });
        navigate("/");
      },
    },
  ];

 
//console.log(name)

   return (
    
      <header className="h-[87px] px-10 flex justify-between items-center bg-gradient-to-r from-slate-300 shadow-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[50px] h-[50px] bg-white p-[5px] rounded-full cursor-pointer 
          md:hidden"
          onClick={()=>setShow(!show)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {/* {show ? <Display options={options}/> : null} */} {/* if else */}
        {show && <Display options={options}/>} {/* if */}
        <div className="w-full flex justify-between items-center m-3 ">
      <h2 className="text-[14px] font-bold
          md:flex
          md:text-[24px]
          lg:text-[26 px]
          xl:text-[30px]">
           <img src="\img\logo.png" alt="logo" class="h-fit h-10 w-10"/> Tinerary 
          </h2>
         
          <Label options={options} />
   
        </div>
      </header>
    );
  }

  //{photo && <button  className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" 
 // onClick= {() => dispatch(signout())}><Logout/></button> }