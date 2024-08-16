let now = new Date()

console.log(dateFns.isToday(now))
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMMM'))
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'Do'))
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'))
const clock = document.querySelector('.clock')

console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDay())
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime())
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

const tick = () => {

  let date = new Date()
  let hour = date.getHours()
  if(hour > 12){
    hour = hour - 12
  }
  let min = date.getMinutes()
  if(min < 10){
    min = `0${min}`
  }
  let sec = date.getSeconds()
  if(sec < 10){
    sec = `0${sec}`
  }
  // console.log(hour, min, sec)
  let time = `${hour}:${min}:${sec}`
  clock.innerText = time
}

setInterval(tick, 1000)