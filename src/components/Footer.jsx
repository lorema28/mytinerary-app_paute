import { Link as Anchor } from "react-router-dom"


export default function Footer() {
  return (
   


    <div class="col-md-6 text-center" >
      
    <Anchor Anchor to={'/home/'} class="nav-item  font-bold      
    hover:text-white 
      hover:hover:text-gray-100 
      hover:transition
      hover:delay-100
      hover:duration-100
      hover:ease-in-out"
      target="_blank"> © My Tinerary
    </Anchor>
 
  </div>

   
  )
}

