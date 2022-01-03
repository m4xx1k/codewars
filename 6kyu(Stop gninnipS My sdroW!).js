/*
03.01.22

description: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */

let str = "You are almost to the last test"
function spinWords(str){
  return str.split(" ").map(elem=>{
    if(elem.split("").length<5){
      return elem
    }else{
      let word = []
      elem.split('').forEach(letter => {
        word.unshift(letter)
      });
      return word.join('')
    }
  })
  .join(" ")
}

console.log(spinWords(str))