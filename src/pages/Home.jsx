import { useState, useEffect } from "react"
import CardUno from "../components/CardUno"
import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import { useSelector,useDispatch } from "react-redux";
import city_actions from '../store/actions/cities'
const { read_carousel } = city_actions



export default function Home() {

    const carousel = useSelector(store=>store.cities.carousel)
    const dispatch = useDispatch()
   
    useEffect(
        () => {
          if (carousel.length===0) {
            dispatch(read_carousel())
          }
        },          // callback que No debe retornar nada y NO puede ser asincrona
        []          // array de dependencias
                    // cuando esta vacio, EL EFECTO se ejecuta una unica vez cuando se monta el componente
                    // cuando tiene variables de dependencias, EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que cambia alguna de esas variables
        // [show]   // es ese ejemplo CADA VEZ que el booleano cambie, se ejecuta la callback de la linea 24
    )
    console.log(carousel);

    return (
      

      <main className='grow flex flex-col items-center mt-[20px] mb-[20px]  px-10
    
      sm: px-0 '>

        <div class=" flex col flex-wrap justify-left mt-2 
">

          <Hero />

          <div class="container text-center">

            <div class="row justify-center ">

              <div className='col-sm-12 col-md-12 col-lg-5 '>
                <CardUno />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-7 ">
             
                <h2 class="text-[25px] justify-center font-bold"><em>Popular MyTineraries</em></h2>
                <Carousel data={carousel} />
              </div>

            </div>
          </div>

        </div>

      </main>

    )
}