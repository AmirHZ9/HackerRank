//Plus minus
//challengs link:
// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
const arr =  [-4,3,-9,0,4,1]
let oddNumbers =0
let evenNumbers =0
let zero =0


for(let i=0;i<arr.length;i++){
    if(arr[i] >0 ){
        evenNumbers++
    }else if(arr[i] == 0){
        zero++
    }else if(arr[i] < 0){
        oddNumbers++
    }
}
console.log((oddNumbers/arr.length).toFixed(6))
console.log((evenNumbers/arr.length).toFixed(6))
console.log((zero/arr.length).toFixed(6))