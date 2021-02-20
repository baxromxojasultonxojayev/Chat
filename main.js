let titleButtonElement = document.querySelector('.chat-button');
let chatFormElement = document.querySelector('.chat-form');
let textareaElement = document.querySelector('.chat-textarea');
let messagesListElement= document.querySelector('.chat-list');

chatFormElement.onsubmit = function (event){
	event.preventDefault()

	let newLiElement = document.createElement('li');
	newLiElement.classList.add('chat-item', 'ketgan');


	let newMessageTextElement = document.createElement('p');
	newMessageTextElement.classList.add('chat-text');
	newMessageTextElement.textContent = textareaElement.value;

	newLiElement.appendChild(newMessageTextElement);
	messagesListElement.appendChild(newLiElement);
	
}