import { useState } from "react"

function MultiplicationTable({ multiplier }){
    const [answer, setAnswer] = useState('')
    const multiArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var multiObject = []
    function tableMaker(multiplier){
        for(let num of multiArray){
            multiObject.push({
                multiplicand: num,
                multiplier: multiplier,
            })
        }
    }

    tableMaker(multiplier)


    return(
        <ul>{multiObject.map((mult,i) =>(
            <li key={i}>
                <div>
                    <p>{mult.multiplicand}</p>
                    <p>X</p>
                    <p>{mult.multiplier}</p>
                    <p>_____</p>
                    <input type='text' value={answer} onChange={(event)=>{setAnswer(event.target.value)}}></input>
                </div>
                </li>))}
                
        </ul>
    )
}

export default MultiplicationTable