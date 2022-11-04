function cadastrar(){
    let nome = document.querySelector("#nome")
    let nomelabel = document.querySelector("nomelabel")

    let email = document.querySelector("#email")
    let emailLabel = document.querySelector("#emailLabel")

    let telefone = document.querySelector("telefone")
    let telefonelabel = document.querySelector("telefonelabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let confirmasenha = document.querySelector("#confirmasenha")
    let confirmasenhaLabel = document.querySelector("#confirmasenhaLabel")
    localStorage.setItem("nome", "email", "senha" )

    if(nome.value == "aluno" && email.value == "admin@dogdex" && senha.value == "2022"){
        alert("entrou")
        window.location.href = "http://127.0.0.1:5500/codigo/login.html"
    } else {
        alert("preencha os campos corretamente")
    }
}
