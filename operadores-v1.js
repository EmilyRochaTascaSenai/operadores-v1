﻿function somar(){
    //Conveter o valor inserido no formulario (prompt) em float (ponto flutuante)//
    //Let funciona apenas no scopo da função//
    let v1 = parseInt(prompt('Digite o Valor 01:'));
    alert(`O Valor digitado é: ${v1}`);

   let v2 = parseInt(prompt('Digite o Valor 02:'));
   alert(`O Valor02 digitado é ${v2}`);

     // Exibir a div resultado.Quando o site carrega ela está com display: none;//
     document.getElementById('resultado').style.display = 'flex';

     // Escrever o resultado no documento HTML//
    document.getElementById('resultado').innerHTML = `O resultado da soma é: ${v1 + v2}`;

}


function subtrair(){
    //Conveter o valor inserido no formulario (prompt) em float (ponto flutuante)//
    //Let funciona apenas no scopo da função//
        let v1 = parseInt(prompt('Digite o Valor 01:'));
        let v2 = parseInt(prompt('Digite o Valor 02:'));
  // Exibir a div resultado.Quando o site carrega ela está com display: none;//
        document.getElementById('resultado').style.display = 'flex';
 // Escrever o resultado no documento HTML//  
        document.getElementById('resultado').innerHTML = `O resultado da soma é: ${v1 - v2}`;
    
}
    
function multiplicar(){
    let v1 = parseFloat(prompt('Digite o Valor 01:'));
    alert(`O Valor digitado é: ${v1}`);

   let v2 = parseInt(prompt('Digite o Valor 02:'));
   alert(`O Valor02 digitado é ${v2}`);

    document.getElementById('resultado').style.display = 'flex';

    document.getElementById('resultado').innerHTML = `O resultado da soma é: ${v1 * v2}`;

}

function dividir(){
    let v1 = parseFloat(prompt('Digite o Valor 01:'));
    alert(`O Valor digitado é: ${v1}`);

   let v2 = parseInt(prompt('Digite o Valor 02:'));
   alert(`O Valor02 digitado é ${v2}`);

    document.getElementById('resultado').style.display = 'flex';

    document.getElementById('resultado').innerHTML = `O resultado da soma é: ${v1 / v2}`;

}

function porcentagem(){
    let v1 = parseFloat(prompt('Digite o valor 01:'))
    let v2= parseFloat(prompt('Quantos % de ${v1} voce quer exibir?'));

    document.getElementById('resultado').style.display='flex';

    document.getElementById('resultado').innerHTML=`O resultado da soma é: ${v1 * v2/100}`;
}

function limpar(){

}