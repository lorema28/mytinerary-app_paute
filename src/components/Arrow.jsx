
export default function Arrow({direction,onClick}) {
  let d_rigth = "M8.25 4.5l7.5 7.5-7.5 7.5"
  let d_left = "M15.75 19.5L8.25 12l7.5-7.5"
  
    return (
    <div>
      
      <svg xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className=" w-[40px] h-[40px] cursor-pointer" 
      onClick={onClick}
      >
  <path strokeLinecap="round" strokeLinejoin="round" d={direction}/>
</svg>

    </div>
  );
}
