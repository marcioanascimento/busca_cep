const cep = document.querySelector("#cep")

const showData = (result) =>{
    for(const campo in result) //para cada resultado, guarde o valor na constante campo.
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
}


cep.addEventListener("blur", ()=>{

    let search = cep.value.replace("-","")
    const options = {
        method : 'GET',
        mode : 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json()
        .then(data => showData(data)) 
    }) // se der certo...
    .catch(e => console.log('Deu erro: ' + e,message)) // se der errado...

})

function limparCampos(){

    document.getElementById("formApp").reset();

}