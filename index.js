// Code your solutions in this file

function writeCards (arrays, event){
    let newArray = []
    for(const array of arrays){
    let result = (`Thank you, ${array}, for the wonderful ${event} gift!`)
    newArray.push(result)
    }
    return newArray
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

// const names = ["Charlie", "Samip", "Ali"]
// for (const name of names){
//     console.log(name)
// }

function countDown(){
    let count = 10
    while (count > -1){
        console.log(count)
        count --
    }
}