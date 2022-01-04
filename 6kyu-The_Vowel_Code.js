/*04.01.22
*/

let arr = 'How are you today?'
/*function encode(arr){
  let rep = ['a','e','i','o','u']
  return arr
        .split('')
        .map(letter=>{
          for(let i = 0;i<rep.length;i+=1){
            //console.log(letter,i,rep[i])
            if(rep[i]==letter){
              return i+1
            }
          }
          return letter
        })
        .join('')
}
function decode(arr){
  let rep = ['a','e','i','o','u']
  return arr
        .split('')
        .map(letter=>{
          for(let i = 0;i<rep.length;i+=1){
            if((i+1)==letter){
              return rep[i]
            }
          }
          return letter
        })
        .join('')
}*/
function encode(arr){
  let rep = ['a','e','i','o','u']
  return arr
        .split('')
        .map(letter=>{
          for(let i = 0;i<rep.length;i+=1){
            if(rep[i]==letter){
              return i+1
            }
          }
          return letter
        })
        .join('')
}
function decode(arr){
  let rep = ['a','e','i','o','u']
  return arr
        .split('')
        .map(letter=>{
          for(let i = 0;i<rep.length;i+=1){
            if((i+1)==letter){
              return rep[i]
            }
          }
          return letter
        })
        .join('')
}
encode(arr)
console.log(decode(encode(arr)))
console.log(encode(arr))




/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/