/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 gap-2 p-2 rounded-xl">
      {options.map((each) => (
        <Anchor
          key={each.to}
          to={each.to}
          className="font-bold h-[50px] text-[20px] px-2 hover:bg-blue-500 hover:text-gray-100 rounded-xl w-[100px] flex justify-center items-center mx-1"
          style={{
            backgroundColor: each.backgroundColor,
            color: each.color,
            hover: each.hover,
          }}
        >
          {each.title}
        </Anchor>
      ))}
    </div>
  );
}