document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTaskDescription = document.getElementById("new-task-description")
    buildToDo(newTaskDescription.value)
})

})
function buildToDo(toDo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${toDo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}