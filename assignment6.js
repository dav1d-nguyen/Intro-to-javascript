
function reverse_variables (a,b) {
  var list = []

  list.push(a)
  list.push(b)

  let reversed_list = list.reverse()

  a = reversed_list[0]
  console.log(a)

  b = reversed_list[1]
  console.log(b)
}

reverse_variables(111,999)