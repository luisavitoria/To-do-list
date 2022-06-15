const inputElement = document.querySelector('input')
const buttonNewTask = document.querySelector('.btn-newTask') 
const ulElement = document.querySelector('ul')
const divTasks = document.querySelector('.list-tasks')

buttonNewTask.onclick = event => {
    event.preventDefault()

    if(inputElement.value) {

        divTasks.style.display = 'block'

        const textElement = document.createElement('p')
        textElement.innerHTML = inputElement.value

        const buttonRemove = document.createElement('button')
        buttonRemove.innerHTML = "<img src='imgs/close.png'/>"

        const buttonChecked = document.createElement('button')
        buttonChecked.innerHTML = "<img src='imgs/check.png'/>"
        buttonChecked.classList = 'btn-checked'

        const divButton = document.createElement('div')
        divButton.classList = "div-btn"
        divButton.appendChild(buttonChecked)
        divButton.appendChild(buttonRemove)

        const liElement = document.createElement('li')

        liElement.appendChild(textElement)
        liElement.appendChild(divButton)

        ulElement.appendChild(liElement)
        inputElement.value = ''

        buttonRemove.onclick = event => {
            event.preventDefault()
            ulElement.removeChild(liElement)

            if(document.querySelectorAll("ul li").length <= 0) {
                divTasks.style.display = 'none'
            }
        }

        buttonChecked.onclick = event => {
            event.preventDefault()
            textElement.style.textDecoration = 'line-through'
        }
    } 
}




