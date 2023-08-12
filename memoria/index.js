const btnResultado = document.querySelector('#calcular');
const contenedorResultado = document.querySelector('#resultado')

btnResultado.addEventListener('click',()=>{
 const val1 = document.querySelector('#banda_color_1').value;
 const val2 = document.querySelector('#banda_color_2').value;

 const multiplicador = document.querySelector('#multiplicador').value;
 const tolerancia = document.querySelector('#tolerancia').value;

 resultado(val1,val2,multiplicador,tolerancia)

})


function resultado(val1,val2,multiplicador,tolerancia){
    var valor = val1.toString() + val2.toString();
    console.log(valor)

    var numero =valor*multiplicador
    console.log(numero)

    if (numero >= 1000000000) {
        numero = numero / 1000000000 + "G";
    } else if (numero >= 1000000) {
        numero = numero / 1000000 + "M";
    } else if (numero >= 1000) {
        numero = numero / 1000 + "K";
    } else if(numero < 10){
        numero = numero.toFixed(1)
    } else if(numero < 1){
        numero = numero.toFixed(2)
    }
   
    contenedorResultado.textContent = numero+" Ohms"+" "+tolerancia+"%"
}
