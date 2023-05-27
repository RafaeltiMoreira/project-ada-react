import { useState } from "react"
//import styles from "./button.module.css"

export default function MeuContador() {

    console.log('Contador funcionando...')

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
            <div>
                <h1>Valor muito auto, maior que 5, atual: {contador}</h1>

                <button onClick={aumentar}>Aumentar</button>
                <button  onClick={diminuir}>Diminuir</button>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Meu contador: {contador}</h1>
            {/* TERNÁRIO { contador > 9 ? <h1>Valor muito grande</h1> : null } */}
            <button className="myButton" onClick={aumentar}>Aumentar</button>
            <button className="myButton2" onClick={diminuir}>Diminuir</button>
        </div>
    )
}