
import Arrow from "../components/Arrow"
import Cards from "../components/Cards"
import CardUno from "../components/CardUno"


export default function Home() {
    let data = [
        {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
        {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
        {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
        {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
        {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
        {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
        {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
        {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
        {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
        {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
        {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
        {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
        {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
        {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
        {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
        {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
      ]
  return (

    <main className='grow flex flex-row items-center  px-10 '> 

    <div class="flex  justify-between items-center ">
    
    <CardUno/>
        <Arrow direction= "M15.75 19.5L8.25 12l7.5-7.5" />

<div className="  w-3/5 flex flex-wrap items-center justify-center ">

{data.slice(0,4).map(each=> <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city}/> )}

    </div>

    <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </div>

    
    </main>
  
  )
}
