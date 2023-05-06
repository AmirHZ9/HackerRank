//chalenge's link:
// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
const s = "aaaa"
const n = 4
let count = n;
for (let i = 0; i < n - 1; i++) {
    let sumIdx = 1;
    while (s[i] === s[i + sumIdx]) {
        sumIdx++;
        count++;
    }

    if (s[i] !== s[i + 1]) {
        sumIdx = 1;
        while (s[i - sumIdx] === s[i + sumIdx] && s[i - sumIdx] === s[i - 1]) {
            count++;
            sumIdx++;
        }
    }
}
console.log(count) ;