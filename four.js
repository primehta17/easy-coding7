// write a function to add even numbers from 1 to n"(inclusive)

function addEvenNumbers(n) {
    let sum=0;
    for(let i=1;i<=n;i++){
        
        if(i%2==0){
            sum+=i;
        }
    }
    return sum;
}
console.log(addEvenNumbers(10));