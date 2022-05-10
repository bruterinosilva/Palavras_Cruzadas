var correto1 = false

function check1(){
    var resposta1 = input_resposta1.value.trim().toLowerCase()
    if(resposta1.length > 2){
        if(resposta1 == 'rom'){
            document.getElementById('input_resposta1').disabled = true
            correto1 = true
            resposta_correta()
            organizar_letras_respota1()
            mostrar()
            desaparecer()
        }
        else{
            resposta_errada()
        }
    }
}
function check2(){
    var resposta2 = input_resposta2.value.trim().toLowerCase()
    if (resposta2.length >= 5){
        if(resposta2 == 'massa'){
            document.getElementById('input_resposta2').disabled = true
            correto1 = true
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
        document.getElementById("bloco_letra_c").animate = {

        }
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

function respota_correta(){
    div_resposta.innerHTML = `Correto!`
    div_resposta.style.color = `Green`
}