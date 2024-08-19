const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')


const addRecipe = (recipe, id) => {
  // console.log(recipe.created_at.toDate())
  let html = `
  <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${recipe.created_at.toDate()}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>`

  list.innerHTML += html
  console.log(html)
}

// db.collection('receipes').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc.id)
//     // console.log(doc.data())
//     addRecipe(doc.data(), doc.id)
//   });
// }).catch(err => {
//   console.log(err)
// })

deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li')
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id){
      recipe.remove()
    }
  })
}

const unsub = db.collection('receipes').onSnapshot(snapshot => {
  console.log(snapshot.docChanges())
  snapshot.docChanges().forEach(change => {
    const doc = change.doc
    console.log(doc.data())
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed'){
      deleteRecipe(doc.id)
    }
  })
})

form.addEventListener('submit', e => {
  e.preventDefault()
  const now = new Date()
  let input = form.recipe.value
  console.log(input)
  const recipe = {
    author: 'LeBron',
    created_at: firebase.firestore.Timestamp.fromDate(now),
    title: input
  }

  db.collection('receipes').add(recipe)
    .then(() => {console.log('recipe add')})
    .catch(err => console.log(err))
})

// deleting data

list.addEventListener('click', e => {
  let deleteItem = e.target.tagName
  console.dir(e)
  if(deleteItem === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id')
    db.collection('receipes').doc(id).delete()
      .then(() => console.log('recipe deleted'))
    console.log(id)
  }
})

button.addEventListener('click', () => {
  unsub()
  console.log('unsubscribed')
})