function GetRando(){
return Math.floor(Math.random() * 10)
}
let randomNumber = (GetRando())
//console.log(randomNumber)

let input = prompt("guess a number")


function checkGuess(input){
if (input == randomNumber){
  return console.log("you just won this whole shit")
}
else if (input > randomNumber) {
  return console.log("Too high, Guess lower")
}
else if (input < randonNumber) {
  return console.log("Too Low, Guess Higher")
}
}

checkGuess(input)
console.log(randomNumber)
