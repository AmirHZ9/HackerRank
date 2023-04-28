// challeng's link:
// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

const a = "cdec";
const b = "dcf";
let count = 0
function makeAnagram(a, b) {
    // Write your code here
    const newA = a.split('')
    const newB = b.split('')
    let count =0
     newA.map(item => {
         const index = newB.indexOf(item)
         if(index !== -1){
             newB.splice(index,1)
             count++
         }
     })
     return newA.length-count+newB.length

}