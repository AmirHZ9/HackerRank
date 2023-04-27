// challeng's link:
// https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const a = "hackerrankcommunity";
const b = "cdecdecdecde";
let s1 = a.split("");
let s2 = b.split("");

// first solution
for(let i=0;i<s1.length;i++){
   if(s2.includes(s1[i])){
    return "YES"
   }
}
return "NO"



// second solution
// const filtered = s1.filter(i => s2.indexOf(i) > -1)
// if(filtered.length >0) {
//     return "yes"
// }else{
//     return "No"
// }