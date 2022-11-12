let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let telefone = document.querySelector("telefone")
let labelTelefone = document.querySelector("labelTelefone")

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")

let confirmarSenha = document.querySelector("#confirmarSenha")
let labelConfirmarSenha = document.querySelector("#labelConfirmarSenha")

nome.addEventListener('keyup', ()=>{
if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
}else{
    labelNome.setAttribute('style', 'color: green')
}
})

function cadastrar() {

}
