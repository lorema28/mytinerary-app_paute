import React, { useState,useEffect, useRef } from 'react'
import CitiesBanner from '../components/CitiesBanner'
import Lupa from '../components/Lupa'
import CitiesCard from '../components/CitiesCard'
import ErrorCard from '../components/ErrorCard'
import Footer from '../components/Footer'
import { useSelector,useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions


export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  //console.log(cities);
  useEffect(() => {
    
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);

  function handleFilter() {
    //console.log(text.current.value);
    setReEffect(!reEffect);
  }
  return (
    <>
       <CitiesBanner />


        <div className='flex flex-col items-center  px-10 py-10'>

          <div className='flex justify-center items-center p-6 '>
          
            <Lupa />
            <input ref={text} type="text" placeholder='Search your city' name="text" id="text" onKeyUp={handleFilter} className='border-2 rounded-lg  box-shadow: 5px 5px 15px gray'  />
          </div>
          <div className='flex flex-wrap gap-6 justify-center'>
            {cities.length != 0 ?
              cities.map((each, index) =>
                <CitiesCard
                  key={index}
                  photo={each.photo}
                  name={each.city}
                  id={each._id} />)
              :
              <ErrorCard />
            }
          </div>


        </div>
        <Footer />
   
    </>
  )
}