function contar() {
    let numero = document.getElementById('txti')
    let res = document.getElementById('res')
    
    if (numero.value.length == 0) {
        res.innerHTML = ("[ERRO] Digite um número!")
    } else {
        let valor = Number(numero.value);

        if (valor % 2 == 0) {
            res.innerHTML = ("Este número é par!")
        } else {
            res.innerHTML = ("Este número é impar!")
        }
    }
}