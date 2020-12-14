
// Wow, it worked! //

function statement () {
  console.log ("Wow, it worked!")
}

statement()

// Favorite movie //

function movie() {
  let favorite_movie = "The Big Short"
  return favorite_movie
}

console.log (movie())

// Name in the middle of a sentence //

function name_in_sentence(name) {
  let sentence = `My name is ${name} and it's awesome!`
  return sentence
}

console.log(name_in_sentence("David"))

// Loop order numbers function //

function order_numbers (a,b) {
  if (a<b) {
    for (a; a <= b; a++) {
      console.log (a)
    }
  } else {
    for (a; a >= b; a--) {
      console.log (a)
    }
  }
}

order_numbers(9,5)

// Sum of numbers function //

function find_the_total (x,y) {
  var sum_list = []

  let total = 0

  for (x; y >= x; x++) {
    total = total + x
  }

  console.log (total)
}

find_the_total(9,12)

// 4-digit sum of the digits function //

function four_digit_sum (four_digit) {
  let string_digit = four_digit.toString()

  let sum_four_digit = parseInt(string_digit.charAt(0))+parseInt(string_digit.charAt(1))+parseInt(string_digit.charAt(2))+parseInt(string_digit.charAt(3))

  console.log(sum_four_digit)
}

four_digit_sum(1024)




