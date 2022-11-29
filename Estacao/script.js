function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var estacao = document.getElementById('sltestacao')
    var value = estacao.options[estacao.selectedIndex].value;

    if (value == 1) {
        msg.innerHTML = `Bem vindo ao Outono.`
    }
    if (value == 2) {
        msg.innerHTML = `Bem vindo ao Inverno.`
    }
    if (value == 3) {
        msg.innerHTML = `Bem vindo a Primavera.`
    }
    if (value == 4) {
        msg.innerHTML = `Bem vindo ao Verão.`
    }

    if (value == 1) {
        //Bem vindo ao outono
        img.src = 'outono.jpg'
        document.body.style.background = '#D2691E'
    } else if ( value == 2) { 
        //Bem vindo ao inverno
        img.src = 'inverno.jpg'
        document.body.style.background = '#808080'
    } else if ( value == 3) { 
        //Bem vindo a primavera
        img.src = 'primavera.jpg'
        document.body.style.background = '#8B008B'
    }else {
        //Bem vindo ao Verão
        img.src = 'verao.jpg'
        document.body.style.background = '#32CD99'
    }
}