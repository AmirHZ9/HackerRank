// challeng's link:
// https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const arr = [1, 5, 5, 25, 125];
const r = 5;
let counter = 0;
arr.reverse()
const runningsSingleCounts  ={},runningsPairsCount ={};
arr.forEach(x=>{
    counter += runningsPairsCount[x * r] || 0
    runningsPairsCount[x] = (runningsPairsCount[x] || 0) + runningsSingleCounts[x*r]
    runningsSingleCounts[x] = (runningsSingleCounts[x] || 0) + 1;
})
console.log(runningsPairsCount)
console.log(runningsSingleCounts)
console.log(counter)


// for (let i = 0; i < num.length; i++) {
//   for (let j = 0; j < num.length; j++) {
//     for (let z = 0; z < num.length; z++) {
//       if (num[i] * r == num[j] && num[j] * r == num[z]) {
//         console.log(`${i} ${j} ${z}`);
//         counter++;
//       }
//     }
//   }
// }
// console.log(counter);
