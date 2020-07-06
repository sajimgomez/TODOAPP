const hello_world = () => {

    alert('Hello World');
    
};

const delete_function = (divElement) => {

    divElement.remove();

};

const add_task = () => {

    const inputField = document.getElementById('inputField');

    const inputFieldContent = inputField.value;

    const divElement = document.createElement('div');

    divElement.setAttribute('class', 'ListItemDiv');

    const inputElement = document.createElement('input');

    inputElement.setAttribute('type', 'checkbox');
    
    const labelElement = document.createElement('label');   

    labelElement.textContent = inputFieldContent;

    const buttonElement = document.createElement('button');

    buttonElement.setAttribute('type', 'button');

    buttonElement.setAttribute('class', 'ButtonListItem');

    buttonElement.setAttribute('onclick', 'delete_function(divElement)');

    buttonElement.textContent = 'Delete';

    divElement.appendChild(inputElement);

    divElement.appendChild(labelElement);

    divElement.appendChild(buttonElement);

    const list = document.getElementById('taskList');

    list.appendChild(divElement);

};


