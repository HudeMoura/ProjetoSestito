var imagemAtual = 1;

    function trocarImagem() {
        var imagem1 = document.getElementById('imagem1');
        var imagem2 = document.getElementById('imagem2');

    if (imagemAtual === 1) {
        imagem1.style.opacity = '0';
        imagem2.style.opacity = '1';
        imagemAtual = 2;
    } else {
        imagem1.style.opacity = '1';
        imagem2.style.opacity = '0';
        imagemAtual = 3;
    }
}