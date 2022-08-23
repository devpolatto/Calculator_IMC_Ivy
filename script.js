const inputWeight = document.getElementById('input-weight')
const inputHeight = document.getElementById('input-height')
const btnCalc = document.getElementById('button-calculate-imc')
const resultValueDisplay = document.getElementById('imc-result')
const resultDisplay = document.getElementById('classificacao')

function classification(result) {
    if(result < 16.9) {
          resultDisplay.innerHTML = "Muito Abaixo do peso";
    } else if (result >=17 && result <=18.4) {
        resultDisplay.innerHTML = "Abaixo do peso";
    } else if (result >=18.5 && result <=24.9) {
        resultDisplay.innerHTML = "Peso Normal";
    } else if (result>= 25 && result <=29.9) {
        resultDisplay.innerHTML = "Acima do peso";
    } else if (result >= 30 && result <=34.9) {
        resultDisplay.innerHTML = "Obesidade Grau I";
    } else if (result >= 35 && result <=40) {
        resultDisplay.innerHTML = "Obesidade Grau II";
    } else if (result > 40) {
        resultDisplay.innerHTML = "Obesidade Grau III";
    } else {
        resultDisplay.innerHTML = "result Inválido"
    }
    return result
}

btnCalc.addEventListener('click', () => {
     let weight = Number(inputWeight.value)
     let height = Number(inputHeight.value)

     let calculate = weight/(height*height)

     resultValueDisplay.innerHTML = calculate

     classification(calculate)
})
