//challenge's link:

const s = "Hello_World!";
const shift = 4;
let result = "";
for (let i = 0; i < s.length; i++) {
  let charCode = s.charCodeAt(i);

  if (charCode >= 65 && charCode <= 90) {
    // Shift the character code by the specified amount
    charCode = ((charCode - 65 + shift) % 26) + 65;
  } else if (charCode >= 97 && charCode <= 122) {
    charCode = ((charCode - 97 + shift) % 26) + 97;
  }
  result += String.fromCharCode(charCode);
}
console.log(result);
