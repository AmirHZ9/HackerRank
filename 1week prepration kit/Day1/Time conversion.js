// challeng's link:
//https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
const s = "12:40:22AM";
const a = s.slice(-2);
const b = s.slice(0,s.length-2)
const c = b.split(":");
a == "AM" && +c[0] == 12
  ? (c[0] = "00")
  : a == "PM" && +c[0] < 12
  ? (c[0] = +c[0] + 12)
  : null;
console.log(c.join(':'))