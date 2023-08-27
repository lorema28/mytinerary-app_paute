import { useState } from "react"
import Login from "./Login"
import { Link as Anchor} from "react-router-dom"



export default function NavBar() {
   let [show,setShow] = useState(true)
   let options = [
      {to:"/",title:"Home"},
      {to:"/cities",title:"Cities"}
   ]
  return (

     <header className='w-full items-center  flex flex-col'>

        <div class="w-full flex items-center  justify-between mt-0 px-10 py-2 ">

           <h2 className="font-bold text-3xl float right d-flex ">
           <div>
    
      </div>   <img src="public\img\logo.png" alt="logo mytinerary" class="  w-7 h-7"/>  Tinerary</h2>

           <label for="navbar-toggler menu-toggle" 
            class="cursor-pointer md:hidden block">
              <svg class="fill-current text-blue-600"
                 xmlns="http://www.w3.org/2000/svg"
                 width="20" height="20"
                 viewBox="0 0 20 20 "
                 onClick={() => setShow(!show)}>
                 <title>Menú</title>
                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
           </label>


           <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="menu">


              <div className="auth flex items-center ">
                 {show ? (
                    <nav id="header" class="w-full z-30 top-10  ">
                       <ul class="hidden md:flex items-center justify-between text-base text-line-height: 2rem pt-4 ">
                          {options.map(each => <li><Anchor key={each.to} to={each.to} class="inline-block no-underline hover:text-gray-100 font-bold text-lg px-4 lg:-ml-2" href="#">{each.title}</Anchor></li>)}
                         <li><Anchor  type="button" className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" target="_blank" >
                             <Login />Login</Anchor></li>
                       </ul>
                    </nav>
                 ) : (null)}
              </div>

           </div>



        </div>



     </header>
 
  )
}
