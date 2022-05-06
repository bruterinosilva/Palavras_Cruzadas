function check1(){
    var resposta1 = input_resposta1.value.trim().toLowerCase()
    if(resposta1.length == 3){
        if(resposta1 == 'cpu'){
            div_resposta.innerHTML = `Correto!`
            div_resposta.style.color = `Green`
        }
        else{
            div_resposta.innerHTML = `Errado!`
            div_resposta.style.color = `Red`
            input_resposta1.innerHTML = ``
        }
    }
}

