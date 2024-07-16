import { useState } from "react";

export function Contador () {
    const [valor, setValor] = useState(0);

    const diminuirContador = () => {
        if (valor > 0) {
            setValor(valor - 1);
        }
    };

    const aumentarContador = () => {
        setValor(valor + 1);
    };

    return (
        <>
            <div className="contador-container">
                <button onClick={diminuirContador}>-</button>
                <span>{valor}</span>
                <button onClick={aumentarContador}>+</button>
            </div>
        </>
    )
}