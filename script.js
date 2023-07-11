async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente');
        }
        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))
