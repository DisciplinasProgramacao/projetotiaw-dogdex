document.addEventListener("keyup", e => {
    const elemento = e.target;

    if (elemento.id == "nome") {
        let labelNome = document.querySelector("#labelNome")

        if (nome.value.length <= 2) {

            labelNome.setAttribute('style', 'color: red')
            labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
            nome.setAttribute('style', 'border-color: red')

        } else {
            labelNome.setAttribute('style', 'color: green')
            labelNome.innerHTML = 'Nome'
            nome.setAttribute('style', 'border-color: green')
        }
    }

    if (elemento.id == "email") {
        let labelEmail = document.querySelector("#labelEmail")

        if (email.value.length <= 5) {
            labelEmail.setAttribute('style', 'color: red')
            labelEmail.innerHTML = 'E-mail *Insira no mínimo 6 caracteres'
            email.setAttribute('style', 'border-color: red')

        } else {
            labelEmail.setAttribute('style', 'color: green')
            labelEmail.innerHTML = 'E-mail'
            email.setAttribute('style', 'border-color: green')
        }
    }

    if (elemento.id == "senha") {
        let labelSenha = document.querySelector("#labelSenha")
        if (senha.value.length <= 7) {
            labelSenha.setAttribute('style', 'color: red')
            labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
            senha.setAttribute('style', 'border-color: red')

        } else {
            labelSenha.setAttribute('style', 'color: green')
            labelSenha.innerHTML = 'Senha'
            senha.setAttribute('style', 'border-color: green')
        }
    }

    if (elemento.id == "confirmarSenha") {
        let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha")
        if (senha.value != confirmarSenha.value) {
            labelConfirmarSenha.setAttribute('style', 'color: red')
            labelConfirmarSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
            confirmarSenha.setAttribute('style', 'border-color: red')

        } else {
            labelConfirmarSenha.setAttribute('style', 'color: green')
            labelConfirmarSenha.innerHTML = 'Confirmar senha'
            confirmarSenha.setAttribute('style', 'border-color: green')
        }
    }
})



function cadastrar() {
    const form = document.querySelector('form');

    const nome = form.nome.value;

    localStorage.setItem("nome", nome);

    console.log(localStorage.getItem("nome"));
}

