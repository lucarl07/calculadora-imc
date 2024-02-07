// Entrada de valores:
const inAltura = document.querySelector('#inAltura'),
inPesoKg = document.querySelector('#inPesoKg'),
btnCalc = document.querySelector('#btnCalc');

// Saída de valores:
const outResult = document.querySelector('#outResult');

// Mensagens de erro:
const errorMsg = document.querySelectorAll('.error-msg')

// Para revelar elementos DOM:
let mostrarElemento = function(elemento, index, estado, mensagem='') {
    elemento[index].style.display = estado
    elemento[index].innerHTML = mensagem
}

// Ao clicar no botão:
btnCalc.addEventListener('click', function() {
    let altura = Number(inAltura.value),
    peso = Number(inPesoKg.value),
    imc = (peso / altura**2).toFixed(1)

    if(altura == '' || peso == '' || isNaN(altura) || isNaN(peso)) {
        if(altura == '' || isNaN(altura)) {
            mostrarElemento(errorMsg, 0, 'block', 'Preencha o campo acima com um número.')
        } else {
            mostrarElemento(errorMsg, 0, 'none')
        }

        if(peso == '' || isNaN(peso)) {
            mostrarElemento(errorMsg, 1, 'block', 'Preencha o campo acima com um número.')
        } else {
            mostrarElemento(errorMsg, 1, 'none')
        }
    } else {
        mostrarElemento(errorMsg, 0, 'none')
        mostrarElemento(errorMsg, 1, 'none')

        outResult.style.display = 'block';
        outResult.innerHTML = `<strong>Resultado:</strong> ${imc} <br>`

        if(imc < 17) {
            outResult.innerHTML += `Você está muito abaixo do seu peso normal.`
        } else if(imc < 18.5) {
            outResult.innerHTML += `Você está abaixo do seu peso normal.`
        } else if(imc < 25) {
            outResult.innerHTML += `Você está na sua faixa de peso ideal.`
        } else if(imc < 30) {
            outResult.innerHTML += `Você está acima do seu peso normal.`
        } else if(imc < 35) {
            outResult.innerHTML += `Você está muito acima do seu peso normal, portando obesidade grau I.`
        } else if(imc < 40) {
            outResult.innerHTML += `Você está muito acima do seu peso normal, portando obesidade grau II.`
        } else {
            outResult.innerHTML += `Você está muito acima do seu peso normal, portando obesidade grau III.`
        }
    }
})