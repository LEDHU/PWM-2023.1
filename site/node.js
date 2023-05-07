// Importe a biblioteca do Firebase
import firebase from 'firebase/app';
import 'firebase/database';

// Configure a conexão com o seu projeto do Firebase
const firebaseConfig = {
  apiKey: '<sua-api-key>',
  authDomain: '<seu-dominio>',
  databaseURL: '<sua-url-do-banco-de-dados>',
  projectId: '<seu-id-do-projeto>',
  storageBucket: '<seu-bucket>',
  messagingSenderId: '<seu-id-do-sender>',
  appId: '<sua-app-id>',
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
