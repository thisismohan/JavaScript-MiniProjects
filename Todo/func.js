let input = document.getElementById('input')
let button = document.getElementById('add')
let list = document.getElementById('list')

let todos = []
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => display(todo));
}
button.addEventListener('click', () => {
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos));
    display(input.value)
    input.value = ''

})
function display(todo) {
    let para = document.createElement('p');
    para.innerText = todo
    list.appendChild(para)
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick', () => {
        list.removeChild(para)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1)
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}