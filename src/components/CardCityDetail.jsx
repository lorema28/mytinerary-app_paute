import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import itinerary_actions from '../store/actions/itineraries'
import ItinerariesCard from "./ItinerariesCard"


const { read_itineraries_from_city } = itinerary_actions

/* eslint-disable react/prop-types */
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
        <div className="w-full flex flex-col items-center mb-10">

            <button onClick={() => setShow(!show)} className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl">
                {show ? ('Hidden ↑') : ('View More ↓')}
            </button>
            
             {/* {show ? () : ()} */}
            {show && (itineraries_from_city.length !== 0 ?
            (itineraries_from_city.map((each, index) =>
                <ItinerariesCard
                admin_id={each.city_id.admin_id.name}
                photo= {each.city_id.admin_id.photo}
                    src={each.photo}   
                    alt={each.city_id}
                    text={each.name}
                    price={each.price}
                    tags={each.tags}
                    duration={each.duration}
                    />)):(
                        
                       <h1><em>There are no itineraries to show</em></h1> 
                    ))}
        </div>
    )
}
