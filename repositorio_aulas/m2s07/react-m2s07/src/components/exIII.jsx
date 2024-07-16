import { useState } from "react";

export function ExIII () {
    const [texto, setTexto] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(texto);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
            </form>
        </div>
    )
}