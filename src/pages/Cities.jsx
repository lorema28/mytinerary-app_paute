import React, { useState,useEffect, useRef } from 'react'
import CitiesBanner from '../components/CitiesBanner'
import CitiesBodyLayout from '../layouts/CitiesBodyLayout'
import axios from 'axios'
import apiUrl from '../apiUrl'


export default function Cities() {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [reEffect, setReEffect] = useState([true]);
  const text = useRef();

  useEffect(
    ()=>{
      axios(apiUrl + "cities?city=" + text.current.value )
      //.then(res=> console.log(res.data.response))      // En lugar de mostrarlo en consola lo seteo en una variable de estado para que se muestre en la vista
      .then(res=> {
        setCities(res.data.response)
        setData(res.data.response)
      })  
      .catch(err=> console.error(err))
    },[reEffect]
  )
  function handleFilter(){
    console.log(text.current);
    setReEffect(!reEffect);
  }

  return (
    <main className='grow flex flex-col items-center mt-[20px] px-10 '> 
       <CitiesBanner />
    <div className="flex flex-col h-[100vh] w-[100vw]">
   
      <CitiesBodyLayout data={data} fx={handleFilter} text={text}/>

    </div>
  
    </main>
  )
}

