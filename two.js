// Program to Print All Prime Numbers in an Interval
// A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers.

// For example, 4 is not a prime number because it is divisible by 1, 2 and 4 itself. It is a composite number.
let lower=15,high=23;
function prime(n){
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }   
    } return true;
}

for(let i=lower;i<=high;i++){
    if(prime(i)){
        console.log(i);
    }
}

console.log(prime(high));