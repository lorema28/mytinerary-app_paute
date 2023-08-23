import React from 'react'
import SearchBar from '../components/Searchbar'
import CitiesCard from '../components/CitiesCard'
import Footer from '../components/Footer'

export default function CitiesBodyLayout({ data, fx, text }) {
  return (
    <div className='w-full gap-10 justify-between min-h-screen bg-[#ebebeb] flex flex-col'>
      <SearchBar citiesData={data} handle={fx} text={text}/>
      <div className='flex flex-wrap gap-6 justify-center'>
        {
          data.map((each, index) => <CitiesCard key={index} photo={each.photo} name={each.city} id={each._id}/>)
        }  
      </div>
      <div>
          <Footer/>
          </div>
    </div>

  )
}