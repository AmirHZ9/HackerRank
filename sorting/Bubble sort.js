//? challeng's link:
//! https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

const array = [3, 2, 1];
let counter = 0
for (let i = 0; i < array.length; i++) {
    for(let j=0; j< array.length;j++){
        if (array[j] > array[j + 1]) {
            let b = array[j];
            array[j] = array[j + 1];
            array[j + 1] = b;
            counter ++
        }
       
    }
}

console.log(`Array is sorted in ${counter} swaps.`)
console.log(`First Element:${array[0]}`)
console.log(`Last Element:${array[array.length-1]}`)