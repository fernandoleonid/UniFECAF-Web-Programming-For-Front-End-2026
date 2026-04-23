'use strict'

async function pegarDadosCep() {
    const cep = document.getElementById('cep').value

    if (cep.length != 8) return false;
    if (isNaN(cep)) return false
    
    const url = `https://viacep.com.br/ws/${cep}/json/`
    
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function preencherFormulario () {
    const dadosCep = await pegarDadosCep()

    if (dadosCep)  {
        document.getElementById('endereco').value = dadosCep.logradouro
        document.getElementById('cidade').value = dadosCep.localidade
        document.getElementById('bairro').value = dadosCep.bairro
        document.getElementById('estado').value = dadosCep.uf
    } else {
        alert ('CEP Incorreto!')
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout', preencherFormulario )