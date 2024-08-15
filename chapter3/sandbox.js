const button = document.querySelector('button');
// const items = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const copy = document.querySelector('.copy')
const box = document.querySelector('.box')


// items.forEach(item => {
//   item.addEventListener('click', (e) => {
//     console.log('li event')
//     item = e.target
//     e.stopPropagation()
//     item.remove()
//   })
// })

button.addEventListener('click', (e) => {
  console.log(e)
  const li = document.createElement('li')
  li.textContent = 'Another item'
  ul.append(li)
  // ul.prepend(li)
})

// event delegation event bubbling
 
ul.addEventListener('click', (e) => {
  // console.log('ul event')
  console.dir(e.target)
  if(e.target.tagName === 'LI'){
    e.target.remove()
  }
})

copy.addEventListener('copy', () => {
  console.log('cheater')
})

box.addEventListener('mousemove', (e) => {
  // console.log(e.offsetX, e.offsetY)
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
})

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY)
})