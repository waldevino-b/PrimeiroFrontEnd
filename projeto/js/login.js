const EMAIL = "admin@admin.com";
const SENHA = "123";



function logar(){
    // Aqui tenho que validar se o usuario e senha estão validos.
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email.toLowerCase() == EMAIL && senha == SENHA){
        window.open("principal.html", "_self");
    }else{
        alert("Usuário ou senha inválidos.");
    }
}
