// challenge's Link:
// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four

const grid = ["abacd", "fghij", "olmkn", "trpqs", "xywuv"];
function gridChallenge(grid) {
    // Write your code here
    let sizeI = grid.length

    for (let i = 0; i < sizeI; i++) {
        grid[i] = grid[i].split("")
        grid[i].sort()
    }
    let sizeJ = grid[0].length

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < sizeJ - 1; j++) {

            if (grid[j][i] > grid[j + 1][i]) {
                return ('NO')
            }
        }
    }
    return "YES"
}
