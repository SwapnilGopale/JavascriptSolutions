// Get first n prime integers
function isPrime(num){
    for(let i=2;i<=Math.floor(num/2);i++){
        if(num%i === 0) return false
    }
    return true
}

function getNPrime(n){
    let [count,num] = [0,2];
    while(count<n){
        if(isPrime(num)) {
            console.log(num)
            count++
        }
        num++
    }
}
getNPrime(5)