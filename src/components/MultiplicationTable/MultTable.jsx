

function MultiplicationTable({ multiplier }){
    multiArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    multiObject = []
    function tableMaker(multiplier){
        for(let num of multiArray){
            multiObject.push({
                multiplicand: num,
                multiplier: multiplier,
                product: num * multiplier
            })
        }
    }
    

    return(
        ''
    )
}

export default MultiplicationTable