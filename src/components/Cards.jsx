
export default function Cards({ src, alt, text, id }) {
  return (


<div class="card text-bg-dark w-2/5 flex flex-col items-center m-2">
  <img src={src} class="card-img " alt={alt}/>
  <div class="card-img-overlay">
    <h2 class="card-title">{text}</h2>
  </div>
</div>



  )
}
