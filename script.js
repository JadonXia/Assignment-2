// The scripts below will cause the image displayed to cycle according to the buttons.
document.getElementById('button1').addEventListener('click', b1)
document.getElementById('button2').addEventListener('click', b2)
document.getElementById('button3').addEventListener('click', b3)
document.getElementById('button4').addEventListener('click', b4)
document.getElementById('button5').addEventListener('click', b5)
document.getElementById('button6').addEventListener('click', b6)
document.getElementById('button7').addEventListener('click', b7)
document.getElementById('button8').addEventListener('click', b8)

function b1 () {
  document.getElementById('img1').src = './images/tim.jpg'
}

function b2 () {
  document.getElementById('img1').src = './images/tim2.jpg'
}

function b3 () {
  document.getElementById('img1').src = './images/tim3.jpg'
}

function b4 () {
  document.getElementById('img1').src = './images/tim4.jpg'
}

function b5 () {
  document.getElementById('img1').src = './images/tim5.jpg'
}

function b6 () {
  document.getElementById('img1').src = './images/tim6.jpg'
}

function b7 () {
  document.getElementById('img1').src = './images/tim7.jpg'
}

function b8 () {
  document.getElementById('img1').src = './images/tim8.jpg'
}
