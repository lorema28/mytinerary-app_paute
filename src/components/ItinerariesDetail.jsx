import Activities from './Activities'

export default function ItinerariesDetail({ itinerary_id }) {
   
    //console.log(itinerary_id)


    return (
     
        <div className="flex flex-col items-center">
            <div>
            
                <h1 className="text-center text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">Activities:</h1>
          
          <Activities itinerary_id={ itinerary_id }/>

            </div>
            <div>
          
            </div>
            <h2 className="text-[14px] text-center mb-3 mt-3
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">Comments</h2>
            <div id="comment-box" class="search container"  >
                <div class="relative w-10 h-10 mb-2 overflow-hidden bg-gray-100 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <form action="#" method="post">
                    <textarea class="comment rounded-lg" name="comment" placeholder="Add your comment..."></textarea>
                    <button type="submit" class="d-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Post comment
                    </button>
               
                </form>


            </div>


        </div>
        

    )
}

//<section>
///<label for="comment">Deja un comentario </label>


//<textarea id="comment" name="comment" rows="3" cols="50"></textarea>
//</section>

//                    <input type="submit" value="Send" className='border-2 rounded-lg  box-shadow: 5px 5px 15px gray' />