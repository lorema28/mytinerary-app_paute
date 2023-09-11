export default function ErrorCard({search}) {
    return (
      
            <div className="text-center text-gray-300">
            <img src="public\img\404 Error-bro.svg" alt="404 Error" />
                <h1 className="text-[48px] font-semibold">404 Error<span>{search}</span></h1>
                <p className="text-[24px]">OOPS!!City not found, please try another city.</p>
            </div>

    )
}
