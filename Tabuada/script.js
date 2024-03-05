function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //Criando uma variavel
        let c = 1
        tab.innerHTML = '' //Limpar antes de gerar

        while (c <= 10) { // Enquanto o contado for menor ou igual a 10
            let item = document.createElement('option') //Criando um elemento option dentro do Select
            item.text = `${n} x ${c} = ${n*c}` // Fazendo aparecer 
            item.value = `tab${c}` 
            tab.appendChild(item) //Adicionar o elemento filho
            c++ // Incrementando, adicionando um mais um
        }
    }
}