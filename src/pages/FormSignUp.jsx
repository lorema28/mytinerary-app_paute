import { useRef,useEffect,useState } from "react";
import Users from "../components/Users";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
import Google from "../components/Google";
const { read_6_users } = user_actions

export default function Form() {
  const navigate = useNavigate();
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");


  const [reload,setReload] = useState(false)
  const dispatch = useDispatch()
  useEffect(
    ()=>{dispatch(read_6_users())},
    [reload]
  )
  
  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      if (photo.current.value) {
        data.photo = photo.current.value
      }
      await axios.post(
        apiUrl + "auth/register", //url del endpoind de creacion
        data //objeto con los datos para crear
      );
      setReload(!reload)
      //console.log(data);
    
      Swal.fire({
        icon: "success",
        title: "User registered!",
        text: "👏Now log in!"
      });
      navigate("/auth/signin");
     {/*navigate("/auth/signin")*/} 
    } catch (error) {
      let faild = error.response.data.messages 
      Swal.fire({
        icon: "error",
        title: "🤦 User NOT registered!",
        html: faild.join('<br>')
        
    })
  }}
  return (
    <div className="flex justify-around my-5">

    <form className="flex flex-col items-center justify-center p-[20px] w-[360px] bg-white  shadow rounded-lg">


   <h1 className="text-[36px] font-bold text-center mb-[10px]">Create account!</h1>
   <div class="flex flex-wrap justify-around">
        <button class="d-flex align items-center space-between bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  my-3 mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
        </button>
        <button class="d-flex align items-center space-between bg-gray-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  my-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
          </svg>
          
        </button>
    
      </div>
  
      <input
        ref={name}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="name"
        id="name"
        defaultValue=""
        placeholder="Your Name*"
      />
      <input
        ref={lastName}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Your Last Name*"
      />
        <select ref={country} type="text" name="Your country*" id="country" className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
          <option>Argentina</option>
          <option>Brasil</option>
          <option >United States</option>
          <option >Chile</option>
          <option >Mexico</option>
          <option >Perú</option>
          <option >Ecuador</option>
          <option >España</option>
        </select>

      <input
        ref={photo}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="photo"
        id="photo"
        defaultValue=""
        placeholder="Your Photo*"
      />
      <input
        ref={mail}
        type="text"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Your Mail*"
      />
      <input
        ref={password}
        type="password"
        className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Your Password*"
      />
      <input
        type="button"
        className="mb-[10px] w-full shadow  bg-blue-600  hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        value="Sign Up!"
        onClick={handleSignUp}
      />
      <Google/>
      <p>
        Already have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-red-800 cursor-pointer"
          to='/auth/signin'
        >
          Sign in!
        </Anchor>
      </p>
    </form>
    <div>
   
    <Users/>
    </div>
</div>
  );
}

//<input
//ref={country}
//type="text"
//className="text-center mb-[10px] bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//name="country"
//id="country"
//defaultValue=""
//placeholder="Your country*"
///>



