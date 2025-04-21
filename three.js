//write a function to multiply two numbers represented as strings

function multiplyStrings(num1, num2) {
    let s=(num1*num2)+"";
    let p=(num1*num2).toString();
    console.log(typeof(s));
    return p;
    
}
console.log(multiplyStrings(123,456))