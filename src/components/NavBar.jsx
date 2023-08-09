import Login from "./Login"

export default function NavBar() {
  return (

       <header >  
<div class="w-full flex items-center justify-between mt-0 px-10 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>My Tinery</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
    
         
         <div class=" md:flex md:items-center md:w-auto w-full " id="nav-content">
     
               <div class="md:flex items-center justify-between text-base text-black-700 pt-4 md:pt-0">
                  <h1 class="inline-block no-underline hover:text-black font-bold text-xl px-4 lg:-ml-2" >My Tinerary</h1>
               </div>
           
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="menu">
            <div class="auth flex items-center w-full md:w-full">
            <nav id="header" class="w-full z-30 top-10  ">
            <ul class="hidden md:flex items-center justify-between text-base text-line-height: 2rem pt-4 ">
                  <li><a class="inline-block no-underline hover:text-black font-bold text-lg px-4 lg:-ml-2" href="#">Home</a></li>
                  <li><a class="inline-block no-underline hover:text-black font-bold text-lg px-4 lg:-ml-2" href="#">Cities</a></li>
                       <li><button type="button" className="bg-blue-600 px-5 py-2 font-bold text-1xl text-white rounded"> <Login/>Login</button></li>  </ul>
             

                </nav>
            </div>
         </div>
      </div>


       </header>
 
  )
}
