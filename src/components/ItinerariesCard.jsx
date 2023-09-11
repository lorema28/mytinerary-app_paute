import { useState } from "react"
import ItinerariesDetail from "./ItinerariesDetail"



/* eslint-disable react/prop-types */
export default function ItinerariesCard({  photo, src, alt, text, price, duration, tags, admin_id,_id}) {
    const [like, setLike] = useState(false)
    const count = 0
    const [show, setShow] = useState(false)

    
    
    return (
        <div className="bg-white border-2 rounded-lg w-100% flex flex-col p-3 m-3  
        md:w-2/3 md:p-5 md:m-5
        lg:p-6 lg:m-6">

            <h1 className="m-2 text-[20px] font-semibold text-center ">{text}</h1>

            <img src={src} alt={alt} className="h-fit " />
            <div className=" flex flex-col my-4 ">
                <div className="d-flex justify-around
            md:flex md:flex-row md:justify-around md:items-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-[14px] text-justify 
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">User:</h1>
                        <img className="w-12 h-12 rounded-full bg-cover" src={photo} alt="User" />
                        <p className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">{admin_id}❤️</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">Hashtags:</h1>
                        <a className=" underline text-indigo-500 text-[14px] mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]" href="#">{tags}</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">Duration:</h1>
                        <p className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">{duration}Min</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">Price:</h1>
                        <p className="text-[14px] text-justify mb-10
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">{"💵".repeat(price)}</p>
                    </div>
                </div>

            </div>


            <div className="flex flex-row justify-between my-4 mx-3">
                <div className="flex flex-row flex-start">
                    {like ?
                        (<svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" className="w-6 h-6 cursor-pointer">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        ) : (
                            <svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        )
                    }
                    <span className="ml-2">
                        {like && count + 1}
                    </span>
                </div>
                {show ?
                    (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                    </svg>
                    ) :
                    (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)
                }



            </div>

            {show && <ItinerariesDetail itinerary_id={_id}/>}
        </div>
    )
}

