const a = ["a", "b", "c", "d", "e"];
var n = 4;
while (n-- !== 0) a.push(a.shift());
console.log(a);
