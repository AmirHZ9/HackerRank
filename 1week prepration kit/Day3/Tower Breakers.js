// challenge's link:
// https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three
function towerBreakers(n, m) {
    // Write your code here
    if (m == 1) {
        return 2
    } else if (n % 2 == 0) {
        return 2
    } else {
        return 1
    }
}
