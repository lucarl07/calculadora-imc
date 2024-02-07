const inAltura = document.querySelector('#inAltura'),
inPesoKg = document.querySelector('#inPesoKg'),
btnCalc = document.querySelector('#btnCalc'),
errorMsg = document.querySelectorAll('.error-msg')

const outputArea = document.querySelector('.output-area'),
outResult = document.querySelector('.outResult');

btnCalc.addEventListener('click', function() {
    let altura = Number(inAltura.value),
    pesoQuilos = Number(inPesoKg.value),
    resultado = pesoQuilos / Math.pow(altura, 2)

    if(altura == '' || isNaN(altura) || pesoQuilos == '' || isNaN(pesoQuilos)) {
        if(altura == '' || isNaN(altura)) {
            errorMsg[0].style.display = 'block'
            errorMsg[0].innerHTML = 'Preencha o campo acima com um valor numérico.'
        }

        if(pesoQuilos == '' || isNaN(pesoQuilos)) {
            errorMsg[1].style.display = 'block'
            errorMsg[1].innerHTML = 'Preencha o campo acima com um valor numérico.'
        }    
    } else {
        outputArea.style.display = 'flex'
        outResult.style.fontSize = '16px'
        outResult.innerHTML = resultado.toFixed(2)
    }
})

