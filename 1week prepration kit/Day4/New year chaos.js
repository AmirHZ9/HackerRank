const q = [1, 2, 5, 3 ,7 ,8 ,6 ,4];
let counter = 0;
let failed = false 
for (let i = 0; i < q.length; i++) {
     if (q[i] - (i + 1) >= 3) {
        failed = true
      
    }
   for(let j=Math.max(0,q[i]-2);j<i;j++){
    if(q[j] >a[i]) counter++
   }
}
console.log(failed ? "Too chaotic" : counter);
