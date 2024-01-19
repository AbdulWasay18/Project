let toDoContainer = document.querySelector('#toDocontainer')
let input = document.querySelector ('#inputFeild')
let addButton = document.querySelector ('#add')

 
addButton.addEventListener('click', ()=> {
    if (input.value == '') {
        alert ('Plz Enter Task')

    } else {
        let newEle = document.createElement ('ul')
        newEle.innerHTML = input.value
        toDoContainer.appendChild (newEle)
        // Empty input feild
        input.value = ' '
    }


})