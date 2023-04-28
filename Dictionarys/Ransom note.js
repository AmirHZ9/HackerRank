// challengs link :
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
const magazine = "two times three is not four";
const note = "two times two is four";
const splitedMagazine = magazine.split(' ')
const splitedNote = note.split(' ')


// first solution
splitedMagazine.map(item =>{
    const index = splitedNote.indexOf(item)
    if(index !== -1){
        splitedNote.splice(index,1)
    }
})
if(note.length>0){
    console.log("No")
}else{
    console.log("Yes")
    
}



// second solution
// function makeFreqMap(str) {
//     const map = {};
//     for (let char of str) {
//         map[char] = map[char] + 1 || 1;
//     }
//     return map;
// }
// function checkMagazine(magazine, note) {

//     const magMap = makeFreqMap(magazine);

//     for (let word of note) {
//         if (!magMap[word]) {
//             console.log('No');
//             return;
//         }

//         magMap[word]--;
//     }

//     console.log('Yes');
// 
// }
// console.log(checkMagazine(magazine,note))

