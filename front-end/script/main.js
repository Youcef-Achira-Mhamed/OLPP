const signUpButton = document.getElementById('signUpButton');
const loginButton = document.getElementById('loginButton');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
