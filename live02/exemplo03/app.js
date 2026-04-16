'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }

function carregarFuncionarios (funcionario) {
    const container = document.getElementById('container')

    const divCard = document.createElement('div')
    divCard.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${funcionario.imagem}`
    foto.alt = `Foto de ${funcionario.nome}`

    const nomeFuncionario = document.createElement('h3')
    nomeFuncionario.textContent = funcionario.nome

    const spanFuncionario = document.createElement('span')
    spanFuncionario.textContent = funcionario.cargo

    divCard.append(foto, nomeFuncionario, spanFuncionario)

    container.append(divCard)
}

function mostrarFuncionarios () {
    document.getElementById('container').replaceChildren()
    funcionarios.forEach(carregarFuncionarios)
}

mostrarFuncionarios ()