function play () {
  let random_number = Math.floor(Math.random()*2)

  if (random_number == 0) {
    document.getElementById("result").innerHTML = "Yes"
  } else {
    document.getElementById("result").innerHTML = "No"
  }
}


