/*
02.01.2222
 description: Move the first letter of each word to the end of it, 
 then add "ay" to the end of the word. 
 Leave punctuation marks untouched.
*/

function pigIt(str){
  let marks = ["!",".",",","?"]
  str = str.split(" ")
  let res = str.map(elem=>{
    for(mark of marks){
      if (elem==mark){
        return elem
      }
    }
    elem = elem.split("")
    elem.push(elem[0]+'ay')
    elem.shift()
    return elem.join('')
  })
  return res.join(" ")
}
