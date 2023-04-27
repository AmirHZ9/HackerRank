// challengs link :
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const magazine = "two times three is not four";
const note = "two times two is four";
function makeFreqMap(str) {
    const map = {};
    for (let char of str) {
        map[char] = map[char] + 1 || 1;
    }
    return map;
}
function checkMagazine(magazine, note) {

    const magMap = makeFreqMap(magazine);

    for (let word of note) {
        if (!magMap[word]) {
            console.log('No');
            return;
        }

        magMap[word]--;
    }

    console.log('Yes');
cd
}
console.log(checkMagazine(magazine,note))


