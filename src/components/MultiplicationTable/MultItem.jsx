import { useState } from "react"
import './Mult.css'


function MultItem({ mult }){
    const [answer, setAnswer] = useState('')

    const rightAnswer = mult.multiplicand * mult.multiplier

        return(
            <div className="MultContainer">
                <p className='Mults'>{mult.multiplicand} X {mult.multiplier}</p>
                <p className="Mults"> = </p>
                    <input className={`MultsInput ${Number(answer) === rightAnswer ? 'correct' : 'incorrect'}`} type='text' value={answer} onChange={(event)=>{setAnswer(event.target.value)}}></input>
            </div>
            )
}

export default MultItem