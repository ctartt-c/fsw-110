const form = document.travelForm 

form.addEventListener('submit', function(e) {
     e.preventDefault()
    
    let firstName = document.querySelector('#first-name').value
    let lastName = document.querySelector('#last-name').value
    let age = document.querySelector('#age').value
    
    let dietArr = []

    let checkedBoxs = form.diet
    for (let i = 0; i < checkedBoxs.length; i++) {
        if (checkedBoxs[i].checked === true) {
            dietArr.push(checkedBoxs[i].value)
        }
    }
    alert(` First Name: ${firstName} \n Last Name: ${lastName} \n Age: ${age} \n Gender: ${form.gender.value} \n Location: ${form.city.value} \n Dietary Restrictions: ${dietArr.join(' ')} `)
})
