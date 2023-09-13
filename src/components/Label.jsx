/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
  let name = useSelector((store) => store.users.user?.name);
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="d-flex font-bold text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl cursor-pointer"
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="font-bold h-[50px] text-[20px] px-2 hover:bg-blue-500 hover:text-gray-100 rounded-xl w-[100px] flex justify-center items-center mx-1 cursor-pointer"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                className=" d-flex font-bold text-white rounded  align-items-center bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100 px-5 py-2 font-bold text-1xl cursor-pointer"
              >
                {each.title}
              </span>
            )
      )}
      {photo && ( 
        <div>
          <Anchor to={"/profile"} className=" flex flex-row items-center justify-center  hover:bg-gray-400 rounded xl">
            <img className=" w-[50px] rounded-full" src={photo} alt="Photo User" />
            <p className=" p-1 font-bold text-[14px]">Hola,👋 {name}!</p>
          </Anchor>
        </div>
      
      )}
 
      
    </div>
  );
}