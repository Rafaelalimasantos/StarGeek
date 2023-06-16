var listaFilmesStar = []

listaFilmesStar = JSON.parse(localStorage.getItem('bdFilmesStar'))
if (listaFilmesStar == null) {
    listaFilmesStar == []
}

console.log(listaFilmesStar)

carregarFilmes()


function validarCadastro(nome, imagem){
    if (nome != '' && imagem != '') {
        return true
    } else {
        return false
    }
}

function carregarFilmes(){

    for (var i in listaFilmesStar) {
        document.getElementById('Lançamentos').innerHTML +=
            `<div>
                <img src='${listaFilmesStar[i].linkFilme}' class='img-filme'> 
                
            <div>`
    }
}

function botaoLimpar() {
    listaFilmesStar = []
    localStorage.setItem( 'bdFilmesStar', JSON.stringify(listaFilmesStar) )
    exibirFilmes()
}

function botaoCadastrar() {
    var nomeFilme = document.getElementById("nome").value 
    var linkFilme = document.getElementById("imagemFilme").value 
    var categoria = document.getElementById("categoria").value 

    var possoCadastrar = validarCadastro(nomeFilme, linkFilme)
    if (possoCadastrar == false) {
        alert ("Verifique os dados antes de cadastrar")
        return
    }

    var filmes = {
        nome: nomeFilme,
        linkFilme: linkFilme,
        categoria: categoria
    }
    listaFilmesStar.push(filmes)
    localStorage.setItem ('bdFilmesStar', JSON.stringify(listaFilmesStar))
    
    location.href = 'catalago-filmes.html'
}

function carregarFoto() {
    var linkFilme = document.getElementById('imagemFilme').value 
    document.getElementById('foto').scr = linkFilme
}
    
    

