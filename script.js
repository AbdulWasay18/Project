let toDoContainer = document.querySelector('#toDocontainer')
let input = document.querySelector ('#inputFeild')
let addButton = document.querySelector ('#add')

// Create New Element 
addButton.addEventListener('click', ()=> {
    if (input.value == '') {
        alert ('Plz Enter Task')
    } else {
        let newEle = document.createElement ('ul')
    newEle.innerHTML = input.value
    toDoContainer.appendChild (newEle)
    }


})