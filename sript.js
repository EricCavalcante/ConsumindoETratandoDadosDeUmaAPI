async function buscaEndereco(cep){
    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json()
    if(consultaCEPConvertida.erro){
        throw Error ('CEP inválido')
    }
   
    var cidade = document.querySelector("#cidade")
    var logradouro = document.querySelector("#endereco")
    var estado = document.querySelector("#estado")

    cidade.value = consultaCEPConvertida.localidade
    logradouro.value = consultaCEPConvertida.logradouro
    estado.value = consultaCEPConvertida.uf

    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
} catch (erro) {
        console.log(erro)
    }
}

var cep = document.querySelector("#cep")
cep.addEventListener("focusout", () => buscaEndereco(cep.value))