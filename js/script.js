/* eslint no-undef: "error" */
/* eslint-env browser */

// Entrada de valores:
const inAltura = document.querySelector('#inAltura');
const inPesoKg = document.querySelector('#inPesoKg');
const btnCalc = document.querySelector('#btnCalc');

// Saída de valores e de erros:
const outResult = document.querySelector('#outResult');
const errorMsg = document.querySelectorAll('.error-msg');

// Descrição do nível IMC:
const descricaoIMC = [
  'Você está muito abaixo do seu peso normal.',
  'Você está abaixo do seu peso normal.',
  'Você está na sua faixa de peso ideal.',
  'Você está acima do seu peso normal.',
  'Você está muito acima do seu peso normal, portando obesidade grau I.',
  'Você está muito acima do seu peso normal, portando obesidade grau II.',
  'Você está muito acima do seu peso normal, portando obesidade grau III.',
];

// Para revelar elementos DOM:
function mostrarElemento(elemento, index, estado, mensagem = '') {
  elemento[index].style.display = estado;
  elemento[index].innerHTML = mensagem;
}

// Ao clicar no botão:
btnCalc.addEventListener('click', () => {
  // Conversão de variáveis:
  const altura = Number(inAltura.value);
  const peso = Number(inPesoKg.value);
  const imc = (peso / altura ** 2).toFixed(1);

  // Validação dos dados:
  if (altura == '' || peso == '' || Number.isNaN(altura) || Number.isNaN(peso)) {
    // Caso #inAltura esteja preenhcido incorretamente:
    if (altura == '' || Number.isNaN(altura)) {
      mostrarElemento(errorMsg, 0, 'block', 'Preencha o campo acima com um número.');
      inAltura.focus();
    } else {
      mostrarElemento(errorMsg, 0, 'none');
    }

    // Caso #inPesoKg esteja preenhcido incorretamente:
    if (peso == '' || Number.isNaN(peso)) {
      mostrarElemento(errorMsg, 1, 'block', 'Preencha o campo acima com um número.');
      inPesoKg.focus();
    } else {
      mostrarElemento(errorMsg, 1, 'none');
    }
  } else {
    // Retirar mensagens de erro:
    mostrarElemento(errorMsg, 0, 'none');
    mostrarElemento(errorMsg, 1, 'none');

    // Mostrar o Índice de Massa Corporal:
    outResult.style.display = 'block';
    outResult.innerHTML = `<strong>Resultado:</strong> ${imc} <br>`;

    if (imc < 17) {
      outResult.innerHTML += descricaoIMC[0];
    } else if (imc < 18.5) {
      outResult.innerHTML += descricaoIMC[1];
    } else if (imc < 25) {
      outResult.innerHTML += descricaoIMC[2];
    } else if (imc < 30) {
      outResult.innerHTML += descricaoIMC[3];
    } else if (imc < 35) {
      outResult.innerHTML += descricaoIMC[4];
    } else if (imc < 40) {
      outResult.innerHTML += descricaoIMC[5];
    } else {
      outResult.innerHTML += descricaoIMC[6];
    }
  }
});
