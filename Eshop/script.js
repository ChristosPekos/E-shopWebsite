const form = document.getElementById('form')
const errorMessage = document.getElementById('error')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const phone = document.getElementById('phoneNumber')

form.addEventListener('submit', (e) => {
  let errors = []

  if (password.value.length <=5){
    errors.push('Your password needs to be at least 6 characters')
  }

  if (password.value !== confirmPassword.value){
    errors.push('Your password doesnt much with your confirmation password')
  }

  if (phone.value.length !== 8){
    errors.push('Please give a correct phone number (8 digits)')
  }



  if (errors.length > 0){
    e.preventDefault()
    errorMessage.innerText = errors.join('\n ')
  }


})
