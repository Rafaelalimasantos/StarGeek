var cadastro = []

cadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (cadastro == null) {
    cadastro = []
}

console.log(cadastro)

function botaoCadastrar() {
    var nome = document.getElementById('nome').value
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var confirmarSenha = document.getElementById('confirmarSenha').value

    var possoCadastrar = validarCadastro(nome, login, senha, confirmarSenha)
    if (possoCadastrar == false) {
        alert(`Preencha todos os dados`)
        return false
    }

    if (senha == confirmarSenha) {
        var usuario = {
            nome: nome,
            usuario: login,
            senha: senha
        }
        cadastro.push(usuario)
        localStorage.setItem(`bdcadastro`, JSON.stringify(cadastro))
        alert (`Usuario cadastrado com sucesso`)
        location.href="login.html"

        document.getElementById("nome").value = ''
        document.getElementById("login").value = ''
        document.getElementById("senha").value = ''
        document.getElementById("confirmarSenha").value = ''
        document.getElementById("nome").focus()
        console.log(``)
    }
    else {
        alert(`As senhas não conferem`)
        return 
    }
}

function validarCadastro(nome, login) {
    if (nome != '' && login != '') {
        return true
    } else {
        return false
    }
}

  function excluirUsuario(indice) {
    cadastro.splice (indice, 1)
    localStorage.setItem(`bdcadastro`, JSON.stringify(cadastro))
    cadastro()
  }

  function botaoEntrar() {
    var usuario = document.getElementById("entrarUsuario").value
    var senha = document.getElementById("entrarSenha").value
    debugger
    var encontrou = false
    cadastro.forEach ( item => {
        if (usuario == item.usuario && senha == item.senha) {
            alert(`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
            location.href="catalago-filmes.html"
        }
    } )

    if (encontrou == false) {
        alert('Usuario não encontrado')
    }
}

console.log(cadastro)

function botaoCadastr() {
    location.href="cadastro.html"
}
