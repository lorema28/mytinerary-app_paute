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
    //console.log(city);
    useEffect(
        () => { dispatch(read_city({ id: city_id })) },
        []
    )
    return (

        
        <div className=" flex flex-col items-center " >

            <div className="flex wrap object-cover h-[500px] w-full  justify-around items-center bg-center bg-no-repeat " 
            style={{ background: `url(${city.photo})`, backgroundSize: "cover" }} >
           
            <div className="flex flex-col align-items center ">
            <h1 className=" text-white text-[50px] font-semibold  text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)]
              md:text-[50px]  
              lg:text-[110px]
              xl:text-[110px] ">{city.country}</h1>
                <h2 className=" text-white text-[18px] font-semibold  text-center drop-shadow-[0_5px_5px_rgba(0,0,0,1)] 
                 md:text-[25px]  
                 lg:text-[40px]
                 xl:text-[40px]">{city.city}</h2>  
               </div>
                </div>

                <p className="text-[14px] text-justify my-10 mx-10
            md:text-[16px]  
            lg:text-[18px]
            xl:text-[20px]"><em>{city.description}</em></p>

           
            <CardCityDetail
                src={city.photo}
                alt={city_id}
                text={city.city}
                id={city_id} 
            
                />

            <Anchor to='/cities' className="mt-5 mb-10">
                <button className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" >
                ← Back to Cities 
                </button>
            </Anchor>

        </div>
    )
}