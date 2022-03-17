function repeatString(string, number) {
    let repeatedString = "";
    while (number > 0) {
      repeatedString += string;
      number--;
    }
    return repeatedString;
  }

  const s = "aba";
  n = 10;
  char = repeatString(s, n);
  charCount = 0;
  for (i = 0; i < n; i++) {
    if (char[i] == "a") charCount++;
  }
  console.log(charCount);