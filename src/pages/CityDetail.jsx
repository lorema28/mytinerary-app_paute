import axios from 'axios';
import React, { useEffect, useState } from 'react'
import apiUrl from '../apiUrl';
import { useParams } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';




export default function CityDetail () {

  const {city_id } = useParams()
  const [city, setCity] = useState([]);

  useEffect(()=>{
      console.log(city_id)
      axios(apiUrl + 'cities/' + city_id)
   
      .then(res=> { setCity(res.data.response)
 })  
      .catch(err => { console.log(err) })
    },[])
    console.log(city)
    return (
        <div className=" min-h-screen lg:mx-20 mt-20 flex flex-col items-center">

            <div className="self-center ">
            <h1 className="text-[24px] font-semibold justify-content text-center">{city.city}</h1>
            <img src={city.photo} alt= {city.text} className="my-5 shadow-lg" />
                <p><em>{city.description}</em></p>
    
            </div>

            <Anchor to='/cities' className="mt-10">
                <button className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" >
                    Back to Cities
                </button>
            </Anchor>

        </div>
    )
}