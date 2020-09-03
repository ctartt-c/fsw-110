let submit = document.querySelector('#submit')

function displayValue() {
    let firstName = document.querySelector('#input-1').value
    let lastName = document.querySelector('#input-2').value
    let age = document.querySelector('#input-3').value

    alert(`First Name: ${firstName} \nLast Name: ${lastName} \n Age: ${age}`)
}

submit.addEventListener('click', displayValue)