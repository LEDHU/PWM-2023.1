https://www.youtube.com/watch?v=7ol2DgfzvC4&list=PLVc5bWuiFQ8FQIWovvUiOO9ok_b6chPsh&index=13

// Selecionando elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const successMessage = document.querySelector('.success-message');

// Função para exibir/ocultar o menu de navegação
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show-menu');
});

// Função para enviar o formulário de contato
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  addContact(formData)
  showSuccessMessage();
});

// Função para exibir a mensagem de sucesso
function showSuccessMessage() {
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
}