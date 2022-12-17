

function MultiplicationTable({ multiplier }){
    const multiArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    var multiObject = []
    function tableMaker(multiplier){
        for(let num of multiArray){
            multiObject.push({
                multiplicand: num,
                multiplier: multiplier,
                product: num * multiplier
            })
        }
    }

    tableMaker(multiplier)


    return(
        <ul>{multiObject.map((mult,i) =>(
            <li key={i}>{mult.multiplicand}<br></br>*<br></br>{mult.multiplier}</li>))}
        </ul>
    )
}

export default MultiplicationTable