function countingValleys(steps, path) {
  var counter = 0;
  var valleyCounter = 8;
  for (let i = 0; i <= steps; i++) {
    if (path[i] == "D") {
      counter++;
    } else {
      counter--;
    }
    if (path[i] == "U" && counter == 0) {
      valleyCounter++;
    }
  }

  return valleyCounter;
}
