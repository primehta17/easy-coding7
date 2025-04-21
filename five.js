// write a function to swap the case of each character in a string

function swapcase(str){
    let newStr="";
 for(let i=0;i<str.length;i++){
    let code= str.charCodeAt(i);
    if(code >= 65 && code <= 90){
        newStr += String.fromCharCode(code+32);
    }else if(code >= 97 && code <= 116){
        newStr += String.fromCharCode(code-32);
    }else{
        newStr += str[i];
    }
 }
 console.log(newStr);
}
swapcase("Hello World!");