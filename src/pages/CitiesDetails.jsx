import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from '../apiUrl'
import {  useParams } from "react-router-dom"
import { Link as Anchor } from 'react-router-dom'



export default function CityDetail() {
    const { id } = useParams()
    // console.log(id);
    const [city, setCity] = useState([])
    function funcion(id) {
      setCity(id)
      console.log(id);
    }
  
  
  
    useEffect(() => {
  
  
      funcion(id)
  
  
    }, [])
    useEffect(() => {
  
  
      axios(apiUrl + 'cities/' + id)
  
  
        .then(res => setCity(res.data.response))
        .catch(err => { console.log(err) })
    }, [])
    return (
        <div className="w-3/5 min-h-screen mx-64 mt-20 flex flex-col items-end">
            <Anchor to='/cities' className="mb-10">
                <button className=" d-flex text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl" target="_blank" >
                    Back to Cities
                </button>
            </Anchor>
            
            <div className="self-center ">
                <h1 className="text-[24px] font-semibold text-center">{city.text}</h1>
                <img src= {city.photo} alt="City photo" className="my-5 shadow-lg" />
                <p>{city.description}</p>
                <p className="text-gray-400 my-5">CityDetail of {city.city} under construction</p>
            </div>
        
        </div>
    )
}