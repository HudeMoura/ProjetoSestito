<?php
function nomeDaFuncao($parametro1, $parametro2) {
    // Corpo da função
    // Código a ser executado
    return $resultado; // Opicional: Retorno da função
}

function calcularSoma($a, $b) {
    $soma = $a + $b;
    return $soma;
}

// Exemplo chamando função

$resultadoSoma = $calcularSoma(10, 5);
echo $resultadoSoma; // Saida 15


// Exemplo de Função com Parâmetro e Retorno

function calcularMedia($nota1, $nota2) {
    $media = ($nona1 + $nota2) / 2;
    return $media;
}

$mediaAluno = calcularMedia(8, 9);
echo "A média do aluno é: ". $mediaAluno;

// Manipulação de String

$frase = "Olá mundo!";
echo strlen($frase); // Saida: 11 (Retorna o comprimento de uma string)
echo strtoupper($frase); // Saida: OLÁ MUNDO (Converte todos os caracteres de uma string para maiúsculas)
echo substr($frase, 0, 3); // Saida: Olá (Extrai uma parte específica de uma string)

// Manipulação de Arrays

$cores = array("vermelhor", "verde", "azul");
echo count($cores); // Saida: 3 (Retorna o número de elementos em um array)
array_push($cores, "amarelo");
print_r($cores); // Saida: Array ([0] => vermelho [1] => verde...) (Adiciona um elemento ao final de um array)

echo array_pop($cores); // Saida: amarelo (Remove e retorna o último elemento de um array)

// Manipulação de Datas e Horarios

echo date("d/m/y"); // Saida: 18/03/2024 (Retorna a data e hora formatadas)

$data_futura = strtotime("+1 week");
echo date("d/m/y", $data_futura); // Saida: 26/03/2024 (Converte uma descrição textual de uma data em um timestamp Unix)


?>