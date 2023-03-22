// Starting array
let array = [28, 43, -12, 30, 4, 0, 13]

// Write your solution below:
let answer = false
for(let i = 0; i < array.length; i++){
    for(let k = 0; k < array.length; k++){
        if(i !== k){
            if(array[i] + array[k] === 0){
                answer = true
            }
        }
    }
}
console.log(answer);