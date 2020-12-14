// Positive or Negative Number

let x = -2

if (x>0) {
  console.log (`${x} is a positive number.`)
} else if (x<0) {
  console.log (`${x} is a negative number.`)
} else {
  console.log  (`${x} is a zero.`)
}

// Smallest and Biggest Number between them

let a = 2
let b = 4
let c = 6

var list_of_numbers = [a, b, c]

list_of_numbers.sort()

console.log (`${list_of_numbers[0]} is the smallest number, and ${list_of_numbers[2]} is the biggest number between ${list_of_numbers}.`)

