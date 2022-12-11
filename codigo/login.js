function logar() {

    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    let mensagemErro = document.querySelector('#mensagemErro')

    let listaUser = []

    let validarUsuario = {
        nome: '',
        usuario: '',
        telefone: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    for (index = 0; index < listaUser.length; index++) {//listaUser.forEach((item) => {
        if (usuario.value == listaUser[index].emailCadastro && senha.value == listaUser[index].senhaCadastro) {

            validarUsuario = {
                nome: listaUser[index].nomeCadastro,
                usuario: listaUser[index].emailCadastro,
                telefone: listaUser[index].telefoneCadastro,
                senha: listaUser[index].senhaCadastro
            }
        }
    }

    if (usuario.value == validarUsuario.usuario && senha.value == validarUsuario.senha) {

        window.location.href = "paginainicial.html"

    } else {

        alert("Usuário ou senha inválidos")

        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        mensagemErro.labelUsuario.setAttribute('style', 'display: block')
        mensagemErro.innerHTML = 'Usuário ou senha inválidos'
        usuario.focus()
    }

}
