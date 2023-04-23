// ? challeng's link:
// ! https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

const prices = [1,12,5,111,200,1000,10];
let k = 50;
prices.sort(function(a, b){return a-b});
    let counter = 0;
    for(let i = 0; i < prices.length; i++){
        if(k > prices[i]){
            k -= prices[i];
            counter++;
        }
    }
    console.log(counter) 