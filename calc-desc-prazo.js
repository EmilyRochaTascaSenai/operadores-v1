//Calcular compras á vista

function calcPagtoVista(){
   let vEtiqueta=100;
   let vDesconto=10;
   let pagVista=vEtiqueta - (vEtiqueta*(vDesconto/100));
   let descVista=vEtiqueta-pagVista
   console.log(`Valor da compra: R$ ${vEtiqueta}`);
   console.log(`Valor do desconto: R$ ${descVista}`);
   console.log(`Valor do pagamento á  vista: R$ ${pagVista}`);

    
}
       


//Calcular compras á prazo
function calcPagtoPrazo(){
    let vEtiqueta=100;
    let vAcrecimo=10;
    let pagPrazo=vEtiqueta+(vEtiqueta*(vAcrecimo/100));
    let acrePrazo=pagPrazo-vEtiqueta
    console.log(`Valor da compra: R$ ${vEtiqueta}`);
    console.log(`Valor do acrecimo: R$ ${acrePrazo}`);
    console.log(`Valor do pagamento á  prazo: R$ ${pagPrazo}`);
}


//Função que recebe parametros para fazer os calculos
function calcPagtoVistaP(valorEtiqueta, desconto){
    //Calculando o valor do desconto e o valor a ser pago á vista
    let valorDesconto=valorEtiqueta * (desconto/100);
    let valorPagar = valorEtiqueta - valorDesconto;

    //Exibindo os resultados
    console.log(`Valor da compra: R$ ${valorEtiqueta.toFixed(2)}.`);
    console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}.`);
    console.log(`Valor do pagamento á  vista: R$ ${valorPagar.toFixed(2)}.`);
}

//Receber paramentos para fazer os calculos com validação
function calcPagtoVistaPV(valorEtiqueta, desconto){
    //Garantindo que ambos os argurmentos sejam números
    valorEtiqueta=parseFloat(valorEtiqueta);
    desconto=parseFloat(desconto);

    //Verificando se os valores são válidos
    if(isNaN(valorEtiqueta)|| isNaN (desconto) ) {
        console.log("Por favor,forneça números válidos");
        return;
    }

    
}


