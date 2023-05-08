// challeng's link:
//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

const a = [1, 2, 3, 4, 2, 3, 1];
// ?first solution
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//       i=0
//       if (a[i] == a[j]) {
//         a.splice(j, 1);
//         a.splice(i, 1);
//     }
//   }
// }
// console.log(a[0]);

//!second solution
for (let int of a) {
  if (a.indexOf(int) === a.lastIndexOf(int)) console.log(int);
}
