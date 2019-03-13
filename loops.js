function forLoop(array) {
  for (var i = 0;  i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
return array
}


// function whileLoop(i) {
//   var i = 27
//   while (i > 0) {
//     console.log(--countdown)
//   }
//   for (i === 0) {
//     return "done"
//   }
// }
