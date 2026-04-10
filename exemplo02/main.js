'use strict'

const botaoVermelho = document.getElementById('vermelho')

function trocarVermelho () {
    const container = document.getElementById('container')
    container.classList.add('vermelho')
}

botaoVermelho.addEventListener('click', trocarVermelho)