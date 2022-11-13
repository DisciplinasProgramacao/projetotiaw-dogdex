let validarNome = false;
let validarEmail = false;
let validarTelefone = false;
let validarSenha = false;
let validarConfirmarSenha = false;

document.addEventListener("keyup", e => {
    const elemento = e.target;

    if (elemento.id == "nome") {
        let labelNome = document.querySelector("#labelNome")

        if (nome.value.length <= 2) {

            labelNome.setAttribute('style', 'color: red')
            labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
            nome.setAttribute('style', 'border-color: red')
            let validarNome = false;

        } else {
            labelNome.setAttribute('style', 'color: green')
            labelNome.innerHTML = 'Nome'
            nome.setAttribute('style', 'border-color: green')
            let validarNome = true;
        }
    }

    if (elemento.id == "email") {
        let labelEmail = document.querySelector("#labelEmail")

        if (email.value.length <= 5) {
            labelEmail.setAttribute('style', 'color: red')
            labelEmail.innerHTML = 'E-mail *Insira no mínimo 6 caracteres'
            email.setAttribute('style', 'border-color: red')
            let validarEmail = false;

        } else {
            labelEmail.setAttribute('style', 'color: green')
            labelEmail.innerHTML = 'E-mail'
            email.setAttribute('style', 'border-color: green')
            let validarEmail = true;
        }
    }

    if (elemento.id == "telefone") {
        let labelTelefone = document.querySelector("#labelTelefone")

        if (telefone.value.length <= 9) {
            labelTelefone.setAttribute('style', 'color: red')
            labelTelefone.innerHTML = 'Telefone *Formato: (12) 3456-7891'
            telefone.setAttribute('style', 'border-color: red')
            let validarTelefone = false;

        } else {
            labelTelefone.setAttribute('style', 'color: green')
            labelTelefone.innerHTML = 'E-mail'
            telefone.setAttribute('style', 'border-color: green')
            let validarTelefone = true;
        }
    }

    if (elemento.id == "senha") {
        let labelSenha = document.querySelector("#labelSenha")
        if (senha.value.length <= 5) {
            labelSenha.setAttribute('style', 'color: red')
            labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
            senha.setAttribute('style', 'border-color: red')
            let validarSenha = false;

        } else {
            labelSenha.setAttribute('style', 'color: green')
            labelSenha.innerHTML = 'Senha'
            senha.setAttribute('style', 'border-color: green')
            let validarSenha = true;
        }
    }

    if (elemento.id == "confirmarSenha") {
        let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha")
        if (senha.value != confirmarSenha.value) {
            labelConfirmarSenha.setAttribute('style', 'color: red')
            labelConfirmarSenha.innerHTML = 'Confirmar senha *As senhas não conferem'
            confirmarSenha.setAttribute('style', 'border-color: red')
            let validarConfirmarSenha = false;

        } else {
            labelConfirmarSenha.setAttribute('style', 'color: green')
            labelConfirmarSenha.innerHTML = 'Confirmar senha'
            confirmarSenha.setAttribute('style', 'border-color: green')
            let validarConfirmarSenha = true;
        }
    }
})



function cadastrar() {

    if(validarNome && validarEmail && validarTelefone && validarSenha && validarConfirmarSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCadastro: nome.value,
                emailCadastro: email.value,
                telefoneCadastro: telefone.value,
                senhaCadastro: senha.value                
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        alert("Cadastrado com sucesso")
        //está dando erro o setAttribute
        // mensagemSucesso.setAttribute('style', 'display: block')
        // mensagemSucesso.innerHTML('<strong>Cadastrado com sucesso</strong>')
        // mensagemErro.setAttribute('style', 'display: none')
        // mensagemErro.innerHTML = ''

        setTimeout(()=>{
            window.location.href = 'login.html'
        }, 2000)
        

    }else{

        alert("Preencha todos os campos corretamente")
        //está dando erro o setAttribute
        // mensagemErro.setAttribute('style', 'display: block')
        // mensagemErro.innerHTML('<strong>Preencha todos os campos corretamente</strong>')
        // mensagemSucesso.setAttribute('style', 'display: none')
        // mensagemSucesso.innerHTML = ''
    }

    // const form = document.querySelector('form');

    // const nome = form.nome.value;

    // localStorage.setItem("nome", nome);

    // console.log(localStorage.getItem("nome"));
}

