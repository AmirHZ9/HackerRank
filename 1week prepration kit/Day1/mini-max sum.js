const arr = [1, 3, 4, 5, 2];
const sort = arr.sort();
let min = 0;
let max = 0;
for (let i = 0; i < arr.length-1 ; i++) {
  min += arr[i];
}
for (let i = 1; i < arr.length ; i++) {
  max += arr[i];
}
console.log(`${min} ${max}`);

