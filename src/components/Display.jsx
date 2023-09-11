/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="flex absolute top-[80px] rigth-[80px] gap-2 flex flex-col bg-white p-2 
    lg:hidden">

      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[16px] px-2 bg-[#EBEBEB] w-[100px] flex justify-center items-center mx-1
                lg:hidden ">
      
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="h-[50px] text-[16px] px-2 bg-[#EBEBEB] w-[100px] flex justify-center items-center mx-1
                lg:hidden ">
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                style={{ backgroundColor: { hover: each.hover } }}
                className="h-[50px] text-[16px] px-2 bg-[#EBEBEB] w-[100px] flex justify-center items-center mx-1
                lg:hidden ">
                {each.title}
              </span>
            )
      )}
    </div>
  );
}