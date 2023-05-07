
// Selecionando elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const formSubmitButton = document.querySelector('#submit-button');
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
  // Enviar os dados para um servidor utilizando uma API ou outro método de envio
  // Neste exemplo, exibimos uma mensagem de sucesso
  showSuccessMessage();
});

// Função para exibir a mensagem de sucesso
function showSuccessMessage() {
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
}


// Função para enviar o formulário de contato
formSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  // Enviar os dados para o Firestore
  addContact(formData)
    .then(() => {
      // Exibir mensagem de sucesso
      alert('Mensagem enviada com sucesso!');
      // Limpar os campos do formulário
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    })
    .catch((error) => {
      // Exibir mensagem de erro
      alert('Ocorreu um erro ao enviar a mensagem: ' + error.message);
    });
});