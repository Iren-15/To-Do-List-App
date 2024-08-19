const btnAdd = document.querySelector('.btnAdd');
const inputText = document.querySelector('#inputText');
const container = document.querySelector('.container');

btnAdd.addEventListener('click', ()=> {
    const toDoContainerLi = document.createElement('li');
    const itemCheck = document.createElement('input');
    itemCheck.setAttribute("type", "checkbox");
    itemCheck.classList.add ('itemCheck');

    const itemText = document.createElement('input');
    itemText.setAttribute("type", "text");
    itemText.value = inputText.value;
    itemText.classList.add ('itemText');

    const itemBtn = document.createElement('button');
    itemBtn.innerText = '🗑️';
    itemBtn.classList.add ('itemBtn');

    toDoContainerLi.appendChild(itemCheck);
    toDoContainerLi.appendChild(itemText);
    toDoContainerLi.appendChild(itemBtn);
    container.appendChild(toDoContainerLi);
    inputText.value = '';

    itemCheck.addEventListener('click', ()=> {
        itemText.classList.toggle ('toDoCompleted');
    })

    itemBtn.addEventListener('click', ()=> {
        container.removeChild(toDoContainerLi);
    })
})

