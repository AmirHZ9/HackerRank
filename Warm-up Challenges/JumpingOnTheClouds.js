for (let i = 0; i <= ar.length; i++) {
  if (ar[i + 2] == 0) {
    jumpCount++;
    i++;
  } else if (ar[i + 2] == 1) {
    jumpCount++;
  } else if (ar[i + 1] == 0) {
    jumpCount++;
  }
}
console.log(jumpCount);
