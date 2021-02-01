let titleButtonElement = document.querySelector('.title-button')
let Formelement = document.querySelector('.chat-form')
let textareaElement = document.querySelector('.chat-type')
let UnorderListElement = document.querySelector('.chat-list')


let FormElement = document.querySelector('.chat-form-1')
let TextAreaElement = document.querySelector('.chat-type-1')
let GetListElement = document.querySelector('.chat-list')


Formelement.onsubmit = function(event){
    event.preventDefault()
    let newElementList = document.createElement('li')
    newElementList.classList.add('chat-item','inbox')
    
    console.log(newElementList );


    let newElementText = document.createElement('p')
    newElementText.classList.add('chat-text')

    newElementText.textContent = textareaElement.value;
    console.log(newElementText);
    newElementList.appendChild(newElementText)

    UnorderListElement.appendChild(newElementList)

    Formelement.reset()

    let NewELementText = document.querySelector('p')
};

FormElement.onsubmit = function(event){
    event.preventDefault()
    let NewelementList = document.createElement('li')
    NewelementList.classList.add('chat-item','outbox');
    // console.log(NewelementList);

    let NewelementText = document.createElement('p')
    NewelementText.classList.add('chat-text')
    // console.log(NewelementText);

    NewelementText.textContent = TextAreaElement.value
    console.log(NewelementText);
    NewelementList.appendChild(NewelementText)

    GetListElement.appendChild(NewelementList)
    

    FormElement.reset()
}