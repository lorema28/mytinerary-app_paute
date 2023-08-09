import { Link as Anchor} from "react-router-dom"

export default function CardUno() {
  return (
  


    
    <div class=" flex col flex-wrap items-justify justify-left mt-2 mr-10 ">
      <h2 class="text-[25px] font-bold ">Find the perfect destination</h2>
      <p class="text-gray-600 mt-4 text-justify">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <Anchor to= '/viewmore' className="bg-blue-600  text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl text-white rounded mt-2" type="button">View More</Anchor>
     

    </div>

  )
}
