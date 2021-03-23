let randomnumber = 0
let userguess = 0

document.getElementById('correct').addEventListener('click', guess)

function guess () {
  userguess = document.getElementById('num').value
  userguess = parseInt(userguess)

  randomnumber = Math.random() * 6 + 1
  randomnumber = parseInt(randomnumber)

  if (userguess === randomnumber) {
    document.getElementById('p').innerHTML = 'you win!'
  }
}
