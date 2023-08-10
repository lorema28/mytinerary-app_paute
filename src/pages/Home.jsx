
import { useState,useEffect } from "react"
import CardUno from "../components/CardUno"
import Carousel from "../components/Carousel"
import Hero from "../components/Hero"


export default function Home() {
 

  
  let data = [
    { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
    { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
    { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
    { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
  ]

 
  return (


    <main className='grow flex flex-col items-center mt-[20px] px-10 '> 

      <div class=" flex col flex-wrap items-justify justify-left mt-2">

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
