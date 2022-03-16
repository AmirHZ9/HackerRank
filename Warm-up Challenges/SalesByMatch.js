const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
count = 0;

for (let i = 0; i < ar.length; i++) {
  for (let j = 1; j < ar.length; j++) {
    if (ar[i] == ar[j] && i != j) {
      ar.splice(j, 1);
      ar.splice(i, 1);
      i = 0;
      j = 0;
      count++;
    }
  }
  return count;
}
