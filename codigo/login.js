function logar() {

    let usuario = document.querySelector('#usuario')
    let labelUsuario = documet.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = documet.querySelector('#labelSenha')

    let mensagemErro = document.querySelector('#mensagemErro')

    let listaUser = []

    let validarUsuario = {
        nome: '',
        email: '',
        telefone: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.emailCadastro && senha.value == item.senhaCadastro) {
            
            validarUsuario = {
                nome: item.nomeCadastro,
                email: item.emailCadastro,
                telefone: item.telefoneCadastro,
                senha: item.senhaCadastro
            }
        }
    })

    if(usuario.value == validarUsuario.usuario && senha.value == validarUsuario.senha){

        window.location.href = paginainicial.html

    }else{

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
