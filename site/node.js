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

(function(){
  const firebaseConfig = {
    apiKey: "AIzaSyBaIh-bJRmsfXWc_mYXZ-6z2YKxWJ5qE5o",
    authDomain: "astronauta-do-mundo.firebaseapp.com",
    projectId: "astronauta-do-mundo",
    storageBucket: "astronauta-do-mundo.appspot.com",
    messagingSenderId: "404103914407",
    appId: "1:404103914407:web:1ef93745a0c8e4e95bcc82",
    measurementId: "G-CRWW0C93ZJ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
})