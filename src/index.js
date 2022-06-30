document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    createTasks(e.target.newTaskDescription.value)
    form.reset()
  })
});

function createTasks(list){
  let p = document.createElement('p')
  let btn = document.createElement("button")
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${list} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
