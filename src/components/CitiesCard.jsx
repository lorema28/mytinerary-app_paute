import React from 'react'
import { Link as Anchor } from "react-router-dom"


export default function CitiesCard({ photo, name, id }) {

  return (

    <Anchor to={"/city/" + id} style={{ background: `url(${photo})`, backgroundSize: "cover" }}
      className='flex bg-center bg-cover text-gray-200 rounded-lg h-[25vh] w-[30vw]
      shadow-lg' >
      <h2 className="d-flex text-white font-bold box-shadow-[0_5px_5px_rgba(0,0,0,1)]">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="currentColor"
          class="w-6 h-6">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
        {name}</h2>
    </Anchor>


  )
}