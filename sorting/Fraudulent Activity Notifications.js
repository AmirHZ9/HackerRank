//? challeng's link:
//! https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
const data = [2, 3, 4, 2, 3, 6, 8, 4, 5];
const num = 5;

//* fist solution
// function activityNotifications(expenditure, d) {
// Write your code here
// let counter = 0;
// let notif = 0;
// for (let i = 0; i < expenditure.length - d; i++) {
//   let median = 0;
//   let newarray = [];
//   for (let j = counter; j < counter + d; j++) {
//     newarray.push(expenditure[j]);
//     newarray.sort();
//   }
//   if (d % 2 !== 0) {
//     median = newarray[Math.floor(d / 2)];
//   } else {
//     let index = Math.floor(newarray.length / 2);
//     median = (newarray[index] + newarray[index - 1]) / 2;
//   }
//   if (expenditure[d + counter] >= 2 * median) {
//     notif++;
//   }
//   if (expenditure.length - counter >= d - 1) {
//     counter++;
//   }
// }
//return notif;
// }
// activityNotifications(data,num)

//* second solution
function activityNotifications(expenditure, d) {
  // Define the counting array with a length of 201 (the maximum possible value of expenditure)
  const countArr = Array(201).fill(0);

  let notificationCount = 0;
  let countIndex = 0;

  // Initialize the counting array with the first d values of expenditure
  for (let i = 0; i < d; i++) {
    countArr[expenditure[i]]++;
  }

  for (let i = d; i < expenditure.length; i++) {
    // Get the median value
    let median = 0;
    if (d % 2 === 0) {
      let first = 0;
      let second = 0;
      let count = 0;

      for (let j = 0; j < countArr.length; j++) {
        count += countArr[j];
        if (count > d / 2) {
          second = j;
          break;
        }
        if (count === d / 2 && first === 0) {
          first = j;
        }
        if (count >= d / 2 + 1) {
          second = j;
          break;
        }
      }

      median = (first + second) / 2;
    } else {
      let count = 0;
      for (let j = 0; j < countArr.length; j++) {
        count += countArr[j];
        if (count > Math.floor(d / 2)) {
          median = j;
          break;
        }
      }
    }

    // Check for notification
    if (expenditure[i] >= median * 2) {
      notificationCount++;
    }

    // Update the count array
    countArr[expenditure[countIndex]]--;
    countArr[expenditure[i]]++;

    // Update count index
    countIndex++;
  }

  return notificationCount;
}
activityNotifications(data, num);
