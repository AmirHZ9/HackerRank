// challenge's link:
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
const arr= [3,0,-7];
let minAbDif = Infinity;
arr.sort((a, b) => a - b);
for (let i = 1; i < arr.length; i++) {
  minAbDif = Math.min(minAbDif, Math.abs(arr[i] - arr[i - 1]));
}
return minAbDif;