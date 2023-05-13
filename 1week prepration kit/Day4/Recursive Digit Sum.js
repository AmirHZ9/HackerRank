const n = '9875';
const k = 4;
function superDigit(n,k=1){
    let numSize = n.length
    if(numSize === 1){
        return n
    }else{
        let sum = n.split('').reduce((a,b)=> Number(a) + Number(b),0)
        return superDigit(String(sum * k))
    }
}
