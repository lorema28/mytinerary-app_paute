import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import itinerary_actions from '../store/actions/itineraries'
import ItinerariesCard from "./ItinerariesCard"


const { read_itineraries_from_city } = itinerary_actions


export default function CardCityDetail({  id }) {
    const [show, setShow] = useState(false)
    const itineraries_from_city = useSelector(store => store.itineraries.itineraries_from_city)
    //console.log(itineraries_from_city)
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(read_itineraries_from_city({ city_id: id }))
        },
        []
    )
    
    return (
        <div className="w-full flex flex-col items-center">

            <button onClick={() => setShow(!show)} className="d-flex text-white rounded  align-items-center  text-gray-200 p-2 rounded  hover:text-gray-100 px-5 py-2 font-bold text-1xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                {show ? ('Hidden ↑') : ('View More ↓')}
            </button>
            
             {/* {show ? () : ()} */}
            {show && (itineraries_from_city.length !== 0 ?
            (itineraries_from_city.map((each, index) =>
                <ItinerariesCard
                    admin_id={each.city_id.admin_id.name}
                    photo={each.city_id.admin_id.photo}
                    src={each.photo}
                    alt={each.city_id}
                    text={each.name}
                    price={each.price}
                    tags={each.tags}
                    duration={each.duration}
                    _id={each._id}
                    />)):(
                        
                        <div className="text-center text-gray-600 items-center my-2">
                          <iframe src="https://giphy.com/embed/nR4L10XlJcSeQ" 
                          width="300" 
                          height="300" 
                          class="giphy-embed" 
                          allowFullScreen>
                            </iframe><p className=" font-bold text center"><a href="https://giphy.com/gifs/no-cat-nR4L10XlJcSeQ">There are no itineraries to show</a></p>
                        
                        </div>
                     ))}
        </div>
    )
}
