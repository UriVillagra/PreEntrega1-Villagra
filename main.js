function saludar(){
    let nombre = prompt("Ingrese su Nombre");
    alert("Bienvenido" + " " + nombre);
}


for(let i = 0; i < 100; i++){
    saludar();
    let monto = prompt("ingrese valor total");
    let cuotas = prompt("ingresecantidad de cuotas");
    let interes = prompt("ingrese porcentaje de interes") / 100;
    let resultado1 = monto / cuotas;
    let resultado2 = resultado1 * interes;
    let resultado3 = resultado2 + resultado1;
    alert("El valor de la cuota es" + " " + resultado3)

}
