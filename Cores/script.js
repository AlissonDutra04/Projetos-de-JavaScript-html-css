// Define uma variável global chamada index e a inicializa com o valor 0
var index = 0;

// Define uma função chamada changeColors
function changeColors() {
    // Define um array de cores
    var colors = ["blue", "black", "green", "yellow", "green", "purple"];

    // Obtém o elemento body do documento e define sua cor de fundo para a próxima cor no array de cores
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    // Verifica se o índice excede o tamanho do array de cores
    if (index > colors.length - 1)
        index = 0; // Reinicia o índice para 0 se exceder o tamanho do array
}
