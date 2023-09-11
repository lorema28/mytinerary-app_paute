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
            <input ref={text} type="text" placeholder='Search your city' name="text" id="text" onKeyUp={handleFilter} 
               aria-label="text"
               aria-describedby="button-addon1"
              class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"  />
          <button
            class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light">
            <Lupa />
          </button>
          
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