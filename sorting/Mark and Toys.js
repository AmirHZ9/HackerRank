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