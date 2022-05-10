var correto1 = false
var correto2 = false
var correto3 = false
var correto4 = false
var correto5 = false
var correto6 = false
var correto7 = false
var correto8 = false
var correto9 = false
var correto10 = false
var correto11 = false
var correto12 = false
var correto13 = false

function check1() {
    var resposta1 = input_resposta1.value.trim().toLowerCase()
    if (resposta1.length >= 3) {
        if (resposta1 == 'rom') {
            document.getElementById('input_resposta1').disabled = true
            correto1 = true
            pergunta1.style.color = `rgb(0, 255, 42)`
            pergunta1.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta1.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta1.style.borderColor = `rgb(0, 163, 16)`
            input_resposta1.style.color = `white`
            resposta_correta()
            organizar_letras_resposta1()
            
        }
        else {
            input_resposta1.value = ``
            resposta_errada()
                 
        }
    }
}

function check2() {
    var resposta2 = input_resposta2.value.trim().toLowerCase()
    if (resposta2.length >= 5) {
        if (resposta2 == 'massa') {
            document.getElementById('input_resposta2').disabled = true
            correto2 = true
            pergunta2.style.color = `rgb(0, 255, 42)`
            pergunta2.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta2.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta2.style.borderColor = `rgb(0, 163, 16)`
            input_resposta2.style.color = `white`
            resposta_correta()
            organizar_letras_resposta2()
            
        }
        else {
            input_resposta2.value = ``
            resposta_errada()
            
        }
    }
}

function check3() {
    var resposta3 = input_resposta3.value.trim().toLowerCase()
    if (resposta3.length >= 3) {
        if (resposta3 == 'dma') {
            document.getElementById('input_resposta3').disabled = true
            correto3 = true
            pergunta3.style.color = `rgb(0, 255, 42)`
            pergunta3.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta3.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta3.style.borderColor = `rgb(0, 163, 16)`
            input_resposta3.style.color = `white`
            resposta_correta()
            organizar_letras_resposta3()
            
        }
        else {
            input_resposta3.value = ``
            resposta_errada()
            
        }
    }
}

function check4() {
    var resposta4 = input_resposta4.value.trim().toLowerCase().replace(' ','')
    if (resposta4.length >= 9) {
        if (resposta4 == 'adressbus') {
            document.getElementById('input_resposta4').disabled = true
            correto4 = true
            pergunta4.style.color = `rgb(0, 255, 42)`
            pergunta4.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta4.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta4.style.borderColor = `rgb(0, 163, 16)`
            input_resposta4.style.color = `white`
            resposta_correta()
            organizar_letras_resposta4()
            
        }
        else {
            input_resposta4.value = `teste`
            resposta_errada()
            
        }
    }
}

function check5() {
    var resposta5 = input_resposta5.value.trim().toLowerCase()
    if (resposta5.length >= 5) {
        if (resposta5 == 'flash') {
            document.getElementById('input_resposta5').disabled = true
            correto5 = true
            pergunta5.style.color = `rgb(0, 255, 42)`
            pergunta5.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta5.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta5.style.borderColor = `rgb(0, 163, 16)`
            input_resposta5.style.color = `white`
            resposta_correta()
            organizar_letras_resposta5()
            
        }
        else {
            input_resposta5.value = ``
            resposta_errada()
            
        }
    }
}

function check6() {
    var resposta6 = input_resposta6.value.trim().toLowerCase()
    if (resposta6.length >= 3) {
        if (resposta6 == 'ram') {
            document.getElementById('input_resposta6').disabled = true
            correto6 = true
            pergunta6.style.color = `rgb(0, 255, 42)`
            pergunta6.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta6.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta6.style.borderColor = `rgb(0, 163, 16)`
            input_resposta6.style.color = `white`
            resposta_correta()
            organizar_letras_resposta7()
            
        }
        else {
            input_resposta6.value = ``
            resposta_errada()
            
        }
    }
}

function check7() {
    var resposta7 = input_resposta7.value.trim().toLowerCase().replace(' ','')
    if (resposta7.length >= 7) {
        if (resposta7 == 'databus') {
            document.getElementById('input_resposta7').disabled = true
            correto7 = true
            pergunta7.style.color = `rgb(0, 255, 42)`
            pergunta7.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta7.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta7.style.borderColor = `rgb(0, 163, 16)`
            input_resposta7.style.color = `white`
            resposta_correta()
            organizar_letras_resposta7()
            
        }
        else {
            input_resposta7.value = ``
            resposta_errada()
            
        }
    }
}

function check8() {
    var resposta8 = input_resposta8.value.trim().toLowerCase()
    if (resposta8.length >= 3) {
        if (resposta8 == 'cpu') {
            document.getElementById('input_resposta8').disabled = true
            correto8 = true
            pergunta8.style.color = `rgb(0, 255, 42)`
            pergunta8.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta8.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta8.style.borderColor = `rgb(0, 163, 16)`
            input_resposta8.style.color = `white`
            resposta_correta()
            organizar_letras_resposta8()
            
        }
        else {
            input_resposta8.value = ``
            resposta_errada()
            
        }
    }
}

function check9() {
    var resposta9 = input_resposta9.value.trim().toLowerCase().replace(' ','')
    if (resposta9.length >= 8) {
        if (resposta9 == 'dualcore') {
            document.getElementById('input_resposta9').disabled = true
            correto9 = true
            pergunta9.style.color = `rgb(0, 255, 42)`
            pergunta9.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta9.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta9.style.borderColor = `rgb(0, 163, 16)`
            input_resposta9.style.color = `white`
            resposta_correta()
            organizar_letras_resposta9()
            
        }
        else {
            input_resposta9.value = ``
            resposta_errada()
            
        }
    }
}

function check10() {
    var resposta10 = input_resposta10.value.trim().toLowerCase()
    if (resposta10.length >= 2) {
        if (resposta10 == 'cs') {
            document.getElementById('input_resposta10').disabled = true
            correto10 = true
            pergunta10.style.color = `rgb(0, 255, 42)`
            pergunta10.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta10.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta10.style.borderColor = `rgb(0, 163, 16)`
            input_resposta10.style.color = `white`
            resposta_correta()
            organizar_letras_resposta10()
            desaparecer()
        }
        else {
            input_resposta10.value = ``
            resposta_errada()
            desaparecer()
        }
    }
}

function check11() {
    var resposta11 = input_resposta11.value.trim().toLowerCase()
    if (resposta11.length >= 5) {
        if (resposta11 == 'eprom') {
            document.getElementById('input_resposta11').disabled = true
            correto11 = true
            pergunta11.style.color = `rgb(0, 255, 42)`
            pergunta11.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta11.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta11.style.borderColor = `rgb(0, 163, 16)`
            input_resposta11.style.color = `white`
            resposta_correta()
            organizar_letras_resposta11()
            desaparecer()
        }
        else {
            input_resposta11.value = ``
            resposta_errada()
            desaparecer()
        }
    }
}

function check12() {
    var resposta12 = input_resposta12.value.trim().toLowerCase()
    if (resposta12.length >= 13) {
        if (resposta12 == 'registradores') {
            document.getElementById('input_resposta12').disabled = true
            correto12 = true
            pergunta12.style.color = `rgb(0, 255, 42)`
            pergunta12.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta12.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta12.style.borderColor = `rgb(0, 163, 16)`
            input_resposta12.style.color = `white`
            resposta_correta()
            organizar_letras_resposta12()
            desaparecer()
        }
        else {
            input_resposta12.value = ``
            resposta_errada()
            desaparecer()
        }
    }
}

function check13() {
    var resposta13 = input_resposta13.value.trim().toLowerCase()
    if (resposta13.length >= 3) {
        if (resposta13 == 'ula') {
            document.getElementById('input_resposta13').disabled = true
            correto13 = true
            pergunta13.style.color = `rgb(0, 255, 42)`
            pergunta13.style.textShadow = `2px 2px 5px rgb(43, 255, 78)`
            input_resposta13.style.backgroundColor = `rgb(150, 150, 150)`
            input_resposta13.style.borderColor = `rgb(0, 163, 16)`
            input_resposta13.style.color = `white`
            resposta_correta()
            organizar_letras_resposta13()
            desaparecer()
        }
        else {
            input_resposta13.value = ``
            resposta_errada()
            desaparecer()
        }
    }
}




    function resposta_errada() {

        desaparecer()
    }

    function respota_correta() {

        desaparecer()
    }
    // faz o sinal de "errado" ou "certo" sumir após um pequeno delay
    function  desaparecer(){
        setTimeout()
    }

    // Esse comando é pra colocar as letras nos quadros onde vai estar a palavra-cruzada
    function organizar_letras_resposta1() {
        if (correto1 == true) {
            document.getElementById("bloco_letra_c").animate = {

            }
            bloco_letra_c.innerHTML = 'C'
            bloco_letra_p.innerHTML = 'P'
            bloco_letra_u.innerHTML = 'U'
        }
    }
