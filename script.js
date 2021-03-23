let userinput = 0

document.getElementById('button').addEventListener('click', input)

function input () {
  userinput = document.getElementById('num').value
  userinput = parseInt(userinput)

  if (userinput > 0) {
    document.getElementById('p').innerHTML = 'positive!'
  }
  if (userinput < 0) {
    document.getElementById('p').innerHTML = 'negative!'
  }
}
