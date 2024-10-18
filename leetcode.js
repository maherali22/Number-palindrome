//1. Number palindrom
/*Given an integer x, return true if x is a 
palindrome, and false otherwise.*/



const isPalindrome = function(x) {
  let a=x.toString().split('').reverse().join('');
  let b=x.toString();
  if(b===a){
   return true
   }else{return false} 
};

let c=isPalindrome(121);
console.log(c);