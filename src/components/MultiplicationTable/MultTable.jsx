import { useState } from "react"
import MultItem from "./MultItem"
import './Mult.css'

function MultiplicationTable({ multiplier }){
  
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
        <div className="listContainer">
            {multiObject.map((mult,i) =>(
                <MultItem mult={mult} />
            ))}
           
        </div>
    )
}

export default MultiplicationTable