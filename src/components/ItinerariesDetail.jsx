import UnderConstruction from "./underconstruction"

export default function ItinerariesDetail() {
    return (
     
        <div className="flex flex-col items-center">
                <div>
                    <h1>Activities:</h1>
                </div>
                <UnderConstruction />

                <section>
                    <label for="comment">Deja un comentario: </label>
                    <textarea id="comment" name="comment" rows="3" cols="50"></textarea>
                </section>
            </div>
  
    )
}

