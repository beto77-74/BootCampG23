const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  if (taskInput.value.trim() === '') {
    alert('El campo es requido, ingresa un tarea nueva.')

    return
  }

  console.log('añadiendo tarea...', taskInput.value)

  const elementLi = document.createElement('li')

  const elementCheckbox = document.createElement('input')
  elementCheckbox.setAttribute('type', 'checkbox')
  elementLi.appendChild(elementCheckbox)

  const span = document.createElement('span')
  span.textContent = taskInput.value
  elementLi.appendChild(span)

  span.style.width='100%'

 
  // DONE: Añadir un botón al li con el texto 'Borrar'

  const elementButton = document.createElement('button')
  elementButton.textContent = 'Borrar'
  elementButton.style.background ='red'
  elementButton.style.color = 'white'
  elementButton.style.textAlign = 'center'
  elementButton.style.borderWidth ='1px'
  elementButton.style.borderRadius = '4px'
  elementLi.appendChild(elementButton)

  taskList.appendChild(elementLi)


  


  //elementLi.style.flex='1'
  //elementLi.style.flex='row'

  taskInput.value = ''

  // const button = document.createElement('button')
  // button.textContent = '¡Hola soy un botón!'
  // console.log(button)
  // document.body.appendChild(button)
})

taskList.addEventListener('click', function(event) {
  console.log('clicked taskList')
  console.log({ target: event.target })

  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove()
  }

  if (event.target.tagName === 'INPUT') {
    event.target.classList.toggle('seleccionado')
  }
})