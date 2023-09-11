/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"


const { read_activities_from_itinerary } = activity_actions

export default function Activities({ itinerary_id }) {
    const dispatch = useDispatch()
    const [activities, setActivities] = useState([])
    useEffect(
        () => {
            dispatch(read_activities_from_itinerary({itinerary_id:  itinerary_id }))
                .then(response => setActivities(response.payload.activities_from_itinerary))
                .catch(err => console.log(err))
        },
        []
    )
    //console.log(activities)
    return (
        <>
            <div className="flex flex-wrap items-center bg-gray-400 border rounded-t-lg">
                {activities?.map(each =>
                    <div key={each._id} className="w-1/3 flex flex-col items-center p-2 m-3 bg-gray-100 rounded-xl courser-pointer">
                        <img src={each.photo} alt={each._id} className="rounded-lg h-[80%] w-full pb-2" />
                        <h1 className="font-bold text-[14px] my-1 mb-4">{each.name}</h1>
                    </div>    
                )}
            </div>
     
        </>
    )
}