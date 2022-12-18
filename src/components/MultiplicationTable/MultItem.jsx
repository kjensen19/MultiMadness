import { useState } from "react"
import './Mult.css'


function MultItem({ mult }){
    const [answer, setAnswer] = useState('')

        return(
            <div className="MultContainer">
                <p className='Mults'>{mult.multiplicand} X {mult.multiplier}</p>
                <p className="Mults"> = </p>
                <input className="MultsInput" type='text' value={answer} onChange={(event)=>{setAnswer(event.target.value)}}></input>
            </div>
            )
}

export default MultItem