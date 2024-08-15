const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.username.value)
  const username = form.username.value
  
  if(usernamePattern.test(username)){
    feedback.textContent = 'that username is valid'
  } else {
    feedback.textContent = 'that username is not valid'
  }
})

// live feedback

form.username.addEventListener('keyup', (e) => {
  // console.log(e.target.value, form.username.value)
  let value = e.target.value
  if(!usernamePattern.test(value)){
    form.username.setAttribute('class', 'error')
  } else {
    form.username.setAttribute('class', 'success')
  }
})



// const username = 'kerliN123'

// const pattern = /^[a-zA-Z0-9]{8,}$/

// let result = pattern.test(username)

// if(result){
//   console.log('regex passed')
// } else {
//   console.log('regex failed')
// }
