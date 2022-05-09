var correto1 = false

function check1(){
    var resposta1 = input_resposta1.value.trim().toLowerCase()
    if(resposta1.length > 2){
        if(resposta1 == 'cpu'){
            div_resposta.innerHTML = `Correto!`
            div_resposta.style.color = `Green`
            document.getElementById('input_resposta1').disabled = true
            correto1 = true
            organizar_letras_respota1()
            mostrar()
            desaparecer()
        }
        else{
            resposta_errada()
            mostrar()
        }
    }
}

function mostrar(){
    div_resposta.style.opacity = 1
}

// faz o sinal de "errado" sumir após um pequeno delay
function desaparecer(){

}

// Esse comando é pra colocar as letras nos quadros onde vai estar a palavra-cruzada
function organizar_letras_respota1(){
    if (correto1 == true){
        bloco_letra_c.innerHTML = 'C'
        bloco_letra_p.innerHTML = 'P'
        bloco_letra_u.innerHTML = 'U'
    }
}

function resposta_errada(){
    div_resposta.innerHTML = `Errado!`
    div_resposta.style.color = `Red`
    input_resposta1.value = ``
}