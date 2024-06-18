let usuario = [];
let password = [];

function cadastro(){
    let nome = document.getElementById('usuario').value;
    let senha = document.getElementById('password').value;

    if (nome != '' && senha != '') {

        usuario.push(nome)
        password.push(senha)

    } else {
        alert('Preencha todos os campos!')
    }
}

function login(){

    let nome = document.getElementById('usuario').value;
    let senha = document.getElementById('password').value;

    if(usuario.indexOf(nome) != -1 && password.indexOf(senha) != -1){

        window.location.href="login.html";
    } else{

        alert("Usuário ou senha incorreto!")
    }
}

function voltar() {
    window.location.href = "index.html";
}


