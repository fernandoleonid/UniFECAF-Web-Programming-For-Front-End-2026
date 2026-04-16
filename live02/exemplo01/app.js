'use strict'

// const, let e var

const clientes = ['Ana Paula', 'Maria', 'Hugo','Leonid', 'Marta']

function carregarClientes( cliente ) {
    const container = document.getElementById('container')
    const spanCliente = document.createElement('span')  
    spanCliente.textContent = cliente  

    container.append(spanCliente)
}   

// variável é o espaço resevado na memória
 
clientes.forEach(carregarClientes)