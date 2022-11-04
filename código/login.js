function logar(){
    let usuário = document.querySelector("#usuário")
    let usuáriolabel = document.querySelector("#usuáriolabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhalabel")

    localStorage.getItem("nome", "senha" )


    if(usuário.value == "nome" && senha.value == "2022"){
        alert("bem vindo!!")
        window.location.href = "http://127.0.0.1:5500/codigo/paginainicial.html"
    } else {
        alert("usuário ou senha inválidos!")
    }
}
