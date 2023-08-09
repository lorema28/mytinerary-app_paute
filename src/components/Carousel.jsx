import { useState } from "react"
import Arrow from "./Arrow"
import Cards from "./Cards"

export default function Carousel({data}) {
  let [counter,setCounter] = useState(0)
  let [counterTo,setCounterTo] = useState(4)
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (counter <= 0) {
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }
 
  return (
    
    

    <div class="flex col justify-center items-center ">

  

<Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <div className="  flex flex-wrap items-center justify-center  ">
              {data.slice(0, 4).map(each => <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city} />)}
            </div>
          </div>
          <div class="carousel-item">
            <div className="  flex flex-wrap items-center justify-center  ">
              {data.slice(4, 8).map(each => <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city} />)}
            </div>
          </div>
          <div class="carousel-item">
            <div className="  flex flex-wrap items-center justify-center  ">
              {data.slice(8, 12).map(each => <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city} />)}
            </div>
          </div>
          <div class="carousel-item">
            <div className="  flex flex-wrap items-center justify-center  ">
              {data.slice(12, 16).map(each => <Cards key={each.id} src={each.photo} alt={each.photo} text={each.city} />)}
            </div>
          </div>
        </div>

      </div>

      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
    
    </div>


  )
}
