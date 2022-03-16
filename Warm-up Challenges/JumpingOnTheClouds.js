let jumpCount = [];

const ar = [0, 0, 0, 1, 0, 0, 1, 0];

for (let i = 0; i < ar.length; i += 2) {
  if (ar[i] == 1) {
    i -= 1;
  }
  jumpCount.push(ar[i]);
}

console.log(jumpCount);