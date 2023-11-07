const form = document.querySelector('#form');
const emailInput = document.querySelector('#email')
const senhaInput = document.querySelector('#senha')
const validacao = document.querySelector('#validacao')

const email = 'admin@gmail.com'
const senha = 'admin123!'

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (emailInput.value == email && senhaInput.value == senha) {
        window.location = 'dashboard.html'
    } else {
        validacao.textContent = "Email ou senha inválidos!"
    }
 
})