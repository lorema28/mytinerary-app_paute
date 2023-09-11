import { useSelector } from "react-redux";

export default function Users() {
  //const store = useSelector(store=> store)
  //console.log(store);
  //const user_reducer = useSelector(store => store.users)
  //console.log(user_reducer);
  const user_state = useSelector((store) => store.users.users);
  console.log(user_state);
  return <div className="w-[300px] hidden md:flex md:flex-wrap">
    {user_state?.map((each) => <img src={each.photo} key={each._id} className="rounded-full p-2  bg-gradient-to-r from-green-400 to-blue-500  w-[150px] h-[150px] object-cover"/>)}
    </div>;
}