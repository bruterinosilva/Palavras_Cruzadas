var correto1 = false

function check1(){
    var resposta1 = input_resposta1.value.trim().toLowerCase()
    var input_de_pergunta = document.querySelector("#input_respota1")
    if(resposta1.length > 2){
        if(resposta1 == 'cpu'){
            div_resposta.innerHTML = `Correto!`
            div_resposta.style.color = `Green`
            document.getElementById('input_resposta1').disabled = true
            correto1 = true
            
            organizar_letras()
            mostrar()
            desaparecer()
        }
        else{
            div_resposta.innerHTML = `Errado!`
            div_resposta.style.color = `Red`
            input_resposta1.value = ``
            document.getElementsByClassName('input_pergunta1').borderColor = 'red'
            mostrar()
        }
    }
}

function mostrar(){
    div_resposta.style.opacity = 1
}

// faz o sinal de "errado" sumir
function desaparecer(){

}

// Esse comando é pra colocar as letras nos quadros onde vai estar a palavra-cruzada
function organizar_letras(){
    if (correto1 == true)
        document.getElementsByClassName('Bloco_letra_c').innerHTML = 'C'
}
