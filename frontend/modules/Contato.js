import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
          this.validate(e)
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(!validator.isEmail(emailInput.value))  {
            this.errors.push('E-mail inválido');
        }
        if(nomeInput.value === '')  this.errors.push('Nome é um campo obrigatório');
        if(emailInput.value === '' && telInput.value === '') {
            this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.')
        }   
        if(!error) el.submit();
        }

    }