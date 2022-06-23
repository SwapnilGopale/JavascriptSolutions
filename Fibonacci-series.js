function fib(n){
    let arr = []
    for(let i=0;i<n;i++){
        if(i<2) arr[i] = 1
        else arr[i] = arr[i-2]+arr[i-1]
    }
    return arr
}
console.log(fib(6))

function fibLittleOptimized(n){
    let arr = [1,1]
    for(let i=2;i<n;i++)
        arr[i] = arr[i-2]+arr[i-1]
    return arr
}
console.log("with optimized",fibLittleOptimized(6))