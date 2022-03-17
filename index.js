const button = document.getElementById('button')
const range = document.getElementById('range')
const rangePrint = document.querySelector('.value-print')
const output = document.querySelectorAll('.output')

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const num = '1234567890'
const specials = ',.!@#$%^&*'
const options = [lowerCase, lowerCase, lowerCase, upperCase, upperCase, num, num, specials, lowerCase, lowerCase, lowerCase, upperCase, upperCase, num, num, specials]

let opt, choose
let password = ""
let idNum = 0

// returning password and the copy icon
function generate() {
  password = ''
  for (let i = 0; i < range.value; i++) {
    opt = Math.floor(Math.random() * range.value)
    choose = Math.floor(Math.random() * options[opt].length)
    password += options[opt][choose]
  }
  idNum++
  return `
    <p id="num id-num${idNum}">${password}</p>
    <i class='copied bx bx-copy'></i>
  `
}

// copying the password and adding copy sign
output.forEach(element => {
  element.addEventListener('click', () => {
    document.execCommand('copy')
    element.innerHTML += `<small class="copied">copied</small>` 
  })
});

// invoking generate function
button.addEventListener('click', () => {
  for ( let i = 0; i < output.length; i++) {  
    output[i].innerHTML = generate()
  }
})

// display length of the password
range.addEventListener('input', () => {
  rangePrint.innerHTML = `${range.value}`
})

