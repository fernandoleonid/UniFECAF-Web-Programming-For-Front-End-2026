'use strict'

// const, let e var

const clientes = ['Ana Paula', 'Maria', 'Hugo','Leonid', 'Marta']

function carregarClientes( cliente ) {
    const container = document.getElementById('container')
    const spanCliente = document.createElement('span')  
    spanCliente.textContent = cliente  

    container.append(spanCliente)
}   

function limparContainer () {
    document.getElementById('container').replaceChildren()
}

function cadastrarCliente () {

    const novoCliente = document.getElementById('inputNome').value

    clientes.push(novoCliente)
    limparContainer()
    mostrarClientes()
}

function mostrarClientes () {
   clientes.forEach(carregarClientes) 
}

mostrarClientes()
document.getElementById('cadastrar').addEventListener('click', cadastrarCliente )