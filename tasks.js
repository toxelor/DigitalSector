document.querySelector("#tasks").addEventListener('click', () => {
    document.querySelector("#tasks-content-wrapper").classList.toggle('active')
})

document.querySelector('#input-form').addEventListener('submit', function(event) {
    event.preventDefault()
    const input = document.querySelector("#tasks-content-input")
    addTask(input.value)
    input.value = ""

})

const content = document.querySelector("#tasks-content")
let tasks = []
let finishedTasks = []

const renderTasks = () => {
    content.innerHTML = ''
    if (tasks.length === 0 && finishedTasks.length === 0) content.innerHTML = 'Пока задач нет'
    finishedTasks.forEach((elem, index) => {
        let div = document.createElement('div')
        div.classList = 'task'
        let div2 = document.createElement('div')
        div2.classList = 'checkbox-div'
        let check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = true
        check.onclick = () => {toggleCheck(true, index, elem)}
        let text = document.createElement('span')
        text.textContent = elem
        text.classList = 'finished'
        div2.appendChild(check)
        div2.appendChild(text)
        div.appendChild(div2)
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Удалить'
        deleteButton.onclick = () => {deleteTask(true, index)}
        div.appendChild(deleteButton)
        content.appendChild(div)
    })
    tasks.forEach((elem, index) => {
        let div = document.createElement('div')
        div.classList = 'task'
        let div2 = document.createElement('div')
        div2.classList = 'checkbox-div'
        let check = document.createElement('input')
        check.type = 'checkbox'
        check.onclick = () => {toggleCheck(false, index, elem)}
        let text = document.createElement('span')
        text.textContent = elem
        div2.appendChild(check)
        div2.appendChild(text)
        div.appendChild(div2)
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Удалить'
        deleteButton.onclick = () => {deleteTask(false, index)}
        div.appendChild(deleteButton)
        content.appendChild(div)
    })
}


const addTask = (value) => {
    tasks.push(value)
    renderTasks()
}

const deleteTask = (finished, index) => {
    finished ?
    finishedTasks = finishedTasks.filter((_, ind) => ind !== index) :
    tasks = tasks.filter((_, ind) => ind !== index)
    renderTasks()
}

const toggleCheck = (finished, index, item) => {
    deleteTask(finished, index)
    finished ?
    tasks.push(item) :
    finishedTasks.push(item)
    renderTasks()
}

const deleteAllFinished = () => {
    finishedTasks = []
    renderTasks()
}

renderTasks()