import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login'
import Contato from './modules/Contato'

const login = new Login('.form-login')
const cadastro = new Login('.form-cadastro')

const nomeAgenda = new Contato('#contato-nome');
const sobrenomeAgenda = new Contato('#contato-sobrenome');
const emailAgenda = new Contato('#contato-email');
const telefoneAgenda = new Contato('#contato-telefone');

login.init();
cadastro.init();

nomeAgenda.init()
sobrenomeAgenda.init()
emailAgenda.init()
telefoneAgenda.init()

import './assets/css/style.css'

