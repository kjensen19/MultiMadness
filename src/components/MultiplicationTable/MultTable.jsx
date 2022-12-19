import { useState } from "react"
import MultItem from "./MultItem"
import './Mult.css'

function MultiplicationTable({ multiplier }){
  
    const multiArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var multiObject = []
    function tableMaker(multiplier){
        function shuffle(multiArray) {
            for (let i = multiArray.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          
              // swap elements multiArray[i] and multiArray[j]
              // we use "destructuring assignment" syntax to achieve that
              // you'll find more details about that syntax in later chapters
              // same can be written as:
              // let t = multiArray[i]; multiArray[i] = multiArray[j]; multiArray[j] = t
              [multiArray[i], multiArray[j]] = [multiArray[j], multiArray[i]];
            }
          }

        shuffle(multiArray)
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