var montoUvas;
var montoBanco;
var uva = [23.43,28.10];
var uvaHoy;
var subsidio;
var ahorro;
var montoUvasPesos;


function iniciarSimulacion(){
    montoUvas = parseInt(prompt("Por favor ingresar el monto total de la propiedad en UVAS")); 
    montoBanco = parseInt(prompt("Ingrese el monto total en pesos que te brinda el banco"));
    uvaHoy = parseFloat(prompt("Ingrese el monto de la UVA al día de hoy")).toFixed(2);
    uva.push(uvaHoy);
    sacarPorcentaje();
}

function sacarPorcentaje(){
    subsidio = parseFloat(montoUvas * 0.14).toFixed(2);
    ahorro = parseFloat(montoUvas  * 0.06).toFixed(2);
    document.getElementById("precio").innerHTML = "valor UVA hoy: $ " + uvaHoy;
    for (let i = 0; i < 3; i++) {
        document.getElementById("monto-total-uvas"+i).innerHTML = "El monto total de la propiedad en UVAS es: " + montoUvas;
        document.getElementById("total-subsidio" + i).innerHTML = "El 14% del subsidio en UVAS es: " + subsidio;
        document.getElementById("total-ahorro" + i).innerHTML = "El 6% de ahorro es de: " + ahorro + " en 9 de cuotas de " + ahorro / 9;
        
    }
}

function calcularPesos(pesos){
    montoUvasPesos = montoUvas * pesos;
    console.log(pesos);

}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML


