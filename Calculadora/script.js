// Seleciona o elemento de input com o id "user_input" e armazena-o na variável userInput
const userInput = document.querySelector("#user_input");

// Inicializa uma variável chamada expression com uma string vazia
var expression = "";

// Define uma função chamada press que é acionada quando um botão numérico ou operador é pressionado
press = (num) => {
  // Concatena o número ou operador pressionado à expressão atual
  expression += num;
  // Atualiza o valor do input com a nova expressão
  userInput.value = expression;
}

// Define uma função chamada equal que é acionada quando o botão de igual é pressionado
equal = () => {
  // Avalia a expressão matemática e exibe o resultado no input
  userInput.value = eval(expression);
  // Reseta a expressão para uma string vazia, preparando-a para uma nova entrada
  expression = "";
}

// Define uma função chamada erase que é acionada quando o botão "C" é pressionado
erase = () => {
  // Reseta a expressão para uma string vazia
  expression = "";
  // Limpa o valor do input, removendo qualquer conteúdo anterior
  userInput.value = expression;
}
