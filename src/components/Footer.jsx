import { Link as Anchor } from "react-router-dom"


export default function Footer() {
  return (


    <div class=" bg-black flex-wrap justify-center p-3">
    
      <div class=" d-flex items-center ">
      <img src=" public\img\whitelogo.png " alt="logopubli" class="h-[15vh] w-[20vw]" />
        <img src="public\img\facebook.png" alt="facebook" class="  w-7 h-7" />
        <img src="public\img\instagram.png" alt="instagram" class="  w-7 h-7" />
        <img src="public\img\youtube.png" alt="youtube" class="  w-7 h-7" />
        < Anchor to={'/home/'} class="   
    hover:text-white 
      hover:hover:text-gray-100 
      hover:transition
      hover:delay-100
      hover:duration-100
      hover:ease-in-out"
          target="_blank"> <em>© By Lorena Paute Vallejo|</em>
        </Anchor>

        
      </div>
  

 


    </div>

   
  )
}

