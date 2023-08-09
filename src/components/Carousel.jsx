import Arrow from "./Arrow"
import Cards from "./Cards"


export default function Carousel({data}) {
  return (
    

    <div class="flex  w-3/5  justify-center items-center ">



    <Arrow direction= "M15.75 19.5L8.25 12l7.5-7.5" />

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="  flex flex-wrap items-center justify-center  ">


{data.slice(0,4).map(each=> <Cards key={each.id} src={each.photo} alt={each.photo}  text={each.city}/> )}

    </div> 

    </div>
    <div class="carousel-item">
    <div className="  flex flex-wrap items-center justify-center ">


{data.slice(4,8).map(each=> <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city}/> )}

    </div>
    </div>
    <div class="carousel-item">
    <div className="  flex flex-wrap items-center justify-center ">


{data.slice(8,12).map(each=> <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city}/> )}

    </div>
    </div>

    <div class="carousel-item">
    <div className="  flex flex-wrap items-center justify-center ">


{data.slice(12,16).map(each=> <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city}/> )}

    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    
    </div>


  )
}
