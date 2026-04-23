'use strict'

async function pegarFotos () {
    
    const raca = document.getElementById('raca').value
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url)
    const data = await response.json()
    return data.message
    
}

function criarFoto (urlFoto) {

    const galeria = document.getElementById('galeria')

    const foto = document.createElement('img')
    foto.src = urlFoto

    galeria.append(foto)

}

async function preencherGaleria () {

    const fotos = await pegarFotos()
    document.getElementById('galeria').replaceChildren()
    fotos.forEach(criarFoto)    
}

document.getElementById('pesquisar')
        .addEventListener('click',  preencherGaleria)