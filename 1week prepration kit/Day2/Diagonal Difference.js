//challenge's link:
// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
let right = 0;
let left = 0;
for (let i = 0; i < arr.length; i++) {
    right += arr[i][i]
    left += arr[i][arr.length-i-1]
}

console.log(right)
console.log(left)