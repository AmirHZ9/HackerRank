// challenge's link:
// https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
const str = "AAABBBAABB"
const splitedStr = str.split('')
let counter = 0

for (let i=0;i<splitedStr.length;i++){
    if(splitedStr[i] == splitedStr[i+1]){
        counter++
    }
}
console.log(counter)