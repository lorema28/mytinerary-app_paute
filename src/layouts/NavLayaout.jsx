import NavBar from "../components/NavBar"

export default function NavLayaout({children}) {
  return (
    <div className='w-full min-h-screen bg-[#ebebeb] flex flex-col'>
       <NavBar/>
       {children}

      </div>
  );
}
