
import React, { useState, useEffect, useRef } from 'react'
import Lupa from './Lupa'



export default function Searchbar({ handle, text }) {

  // const [cities, setCities] = useState([]);
  // const [data, setData] = useState([]);
  // const [reEffect, setReEffect] = useState([true]);
  // const text = useRef();

  // useEffect(
  //   ()=>{
  //     axios(apiUrl + "cities?city=" + text.current.value)
  //     //.then(res=> console.log(res.data.response))      // En lugar de mostrarlo en consola lo seteo en una variable de estado para que se muestre en la vista
  //     .then(res=> {
  //       setCities(res.data.response)
  //       setData(res.data.response)
  //     })  
  //     .catch(err=> console.error(err))
  //   },[reEffect]
  // )
  // function handleFilter(){
  //   console.log(text.current.value);
  //   setReEffect(!reEffect);
  // }

  return (
    <div className='flex justify-center items-center p-6 '>
<Lupa/>
      <input ref={text} type="text" placeholder= 'Search your city' name=" "  id="" onKeyUp={handle} className='border-2 rounded-lg'/>
    </div>
    
    
  )
}