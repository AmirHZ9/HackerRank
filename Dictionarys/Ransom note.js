const magazine = "give me one grand today night";
const note = "give one grand today";
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