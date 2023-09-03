import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_city } = city_actions
import { Link as Anchor } from 'react-router-dom';
import CardCityDetail from '../components/CardCityDetail';



export default function CityDetail() {
    const [show,setShow] = useState(false)
    const { city_id } = useParams()
    const dispatch = useDispatch()
    const city = useSelector(store => store.cities.city)
    console.log(city);
    useEffect(
        () => { dispatch(read_city({ id: city_id })) },
        []
    )
    return (
        <div className=" min-h-screen lg:mx-20 mt-20 flex flex-col items-center">

            <div className="self-center items-center  position: relative" >
                <h1 className=" text-white text-[24px] font-semibold justify-content text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">{city.city}</h1>
                <img src={city.photo} alt={city.text} className="object-contain my-5 shadow-lg" />
                <p className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]"><em>{city.description}</em></p>

            </div>
            <CardCityDetail
                src={city.photo}
                alt={city_id}
                text={city.city}
                id={city_id} 
            
                />

            <Anchor to='/cities' className="mt-10 mb-10">
                <button className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" >
                ← Back to Cities 
                </button>
            </Anchor>

        </div>
    )
}