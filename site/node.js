// Importe a biblioteca do Firebase
import firebase from 'firebase/app';
import 'firebase/database';

// Configure a conexão com o seu projeto do Firebase
const firebaseConfig = {
  
  apiKey: "AIzaSyBaIh-bJRmsfXWc_mYXZ-6z2YKxWJ5qE5o",
  authDomain: "astronauta-do-mundo.firebaseapp.com",
  databaseURL: "https://astronauta-do-mundo-default-rtdb.firebaseio.com",
  projectId: "astronauta-do-mundo",
  storageBucket: "astronauta-do-mundo.appspot.com",
  messagingSenderId: "404103914407",
  appId: "1:404103914407:web:1ef93745a0c8e4e95bcc82",
  measurementId: "G-CRWW0C93ZJ"

};
firebase.initializeApp(firebaseConfig);

// Crie uma referência para a seção do banco de dados onde você deseja armazenar as informações do formulário de contato
const database = firebase.database();
const contatosRef = database.ref('contatos');

// Adicione um listener para o evento de submissão do formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Obtenha as informações do formulário
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const mensagem = document.querySelector('#mensagem').value;
  
  // Crie um novo objeto com as informações do formulário
  const novoContatoRef = contatosRef.push();
  novoContatoRef.set({
    nome,
    email,
    mensagem,
    data: new Date().toISOString(),
  });
  
  // Limpe o formulário
  form.reset();
});
