const str = "AAABBBAABB"
const splitedStr = str.split('')
let counter = 0

for (let i=0;i<splitedStr.length;i++){
    if(splitedStr[i] == splitedStr[i+1]){
        counter++
    }
}
console.log(counter)