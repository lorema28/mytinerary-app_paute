import React from 'react'




export default function CitiesBanner() {
  return (
    <div className='flex wrap h-[45vh] w-full justify-around items-center bg-center bg-no-repeat bg-cover  bg-opacity-75 '
      style={{ backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.2), rgba(100, 100, 100, 0.9)), url(img/lanoche.jpg)` }}>

      <div className="flex flex-col align-items-center">
        <h2 className='text-4xl text-white font-bold'>Cities</h2>
        <p className='text-white text-center'>Collection of the most beautiful places and experience</p>
      </div>
    </div>
  )
}