import { useState, useEffect } from "react"
import CardUno from "../components/CardUno"
import Carousel from "../components/Carousel"
import Hero from "../components/Hero"

import axios from "axios"
import apiUrl from '../apiUrl'



export default function Home() {
    const [data, setData] = useState([])
    useEffect(
        () => {
            axios(apiUrl+'cities/carousel')
                .then(res => setData(res.data.data_carousel))
                .catch(err=>console.log(err))
        },          // callback que No debe retornar nada y NO puede ser asincrona
        []          // array de dependencias
                    // cuando esta vacio, EL EFECTO se ejecuta una unica vez cuando se monta el componente
                    // cuando tiene variables de dependencias, EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que cambia alguna de esas variables
        // [show]   // es ese ejemplo CADA VEZ que el booleano cambie, se ejecuta la callback de la linea 24
    )
    
    return (
      

       <main className='grow flex flex-col items-center mt-[20px] px-10 '> 

      <div class=" flex col flex-wrap justify-left mt-2">

      <Hero/>
    
        <div class="container text-center">

          <div class="row justify-center ">

            <div class="col-sm-6 col-md-5 col-lg-6">
              <CardUno />
            </div>
            <div class="col-sm-6 col-md-5 col-lg-6">
              <h2 class="text-[25px] justify-center"><em>Popular MyTineraries</em></h2>
              <Carousel data={data} />
            </div>

          </div>
        </div>

      </div>

    </main>

    )
}