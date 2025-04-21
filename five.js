// write a function to swap the case of each character in a string

function swapcase(str){
   let newStr="";
   for(let i=0;i<str.length;i++){
    let code = str.charCodeAt(i);
        // Uppercase A-Z: 65 to 90
    if(code >= 65 && code <=90){
        newStr += String.fromCharCode(code+32);// convert to lowercase
          // Lowercase a-z: 97 to 122
    }else if(code >=97 && code <=122){
        newStr += String.fromCharCode(code-32);// convert to uppercase
    }else{
         // Non-alphabetic characters stay the same
        newStr += str[i];
    }
   
   }
   return newStr;
}
console.log(swapcase("Hello World!"));