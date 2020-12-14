// Loop to order numbers

let a = 9
let b = 5

if (a<b) {
  for (a; a <= b; a++) {
    console.log (a)
  }
} else {
  for (a; a >= b; a--) {
    console.log (a)
  }
}

// Loop to find the sum of numbers

let x = 9
let y = 12

var sum_list = []

let total = 0

for (x; y >= x; x++) {
  total = total + x
}

console.log (total)

// 4-digit sum of the digits

let four_digit = 1024

let string_digit = four_digit.toString()

let sum_four_digit = parseInt(string_digit.charAt(0))+parseInt(string_digit.charAt(1))+parseInt(string_digit.charAt(2))+parseInt(string_digit.charAt(3))

console.log(sum_four_digit)