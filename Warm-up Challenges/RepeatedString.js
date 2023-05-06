// challengs link:
//https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
const s ='aba'
const n = 10
let countA = 0
let division = n/s.length
let mod = n % s.length
let add = 0;
let result;
for (let i=0; i<s.length; i++) {
  if (s[i] === "a") {countA++}
}

if (mod === 0) { 
  result = countA * Math.trunc(division)
  
} else {
  
  for (let j=0; j<mod; j++) {
      if (s[j] === "a") {add++}
}
result = countA * Math.trunc(division) + add

}
console.log(result)