const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const chatRooms = document.querySelector('.chat-rooms')

newChatForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = newChatForm.message.value.trim()
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))
})

newNameForm.addEventListener('submit', e => {
  e.preventDefault()
  const newName = newNameForm.name.value.trim()
  chatroom.updateName(newName)
  newNameForm.reset()
  updateMssg.innerText = `Your name was updated to ${newName}`
  setTimeout(() => updateMssg.innerText = ``, 3000)
})

chatRooms.addEventListener('click', e => {
  let room = e.target.tagName
  let value = e.target.getAttribute('id')
  // console.log(value)
  if(room === 'BUTTON'){
    chatUI.clear()
    chatroom.updateRoom(value)
    chatroom.getChats(chat => chatUI.render(chat))
  }
})

const username = localStorage.username ? localStorage.username : 'anon'

const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('gaming', username)

chatroom.getChats(data => chatUI.render(data))

