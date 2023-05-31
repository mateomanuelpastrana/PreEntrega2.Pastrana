

class Prestamo{
    constructor(nombre, monto, cuotas){
        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
        this.monto_final = 0;
    }

    calcular_cuotas(monto, cuotas){

        let interes;

        if(cuotas = 1){
            this.monto_final = this.monto;
        }
        else if(cuotas = 3){
            interes = monto * 0.20;
            this.monto_final = this.monto + interes;
        }
        else if(cuotas = 6){
            interes = monto * 0.50;
            this.monto_final = this.monto + interes;
        }
        else if(cuotas = 12){
            interes = monto * 0.80;
            this.monto_final = this.monto + interes;
        }
    }

}

// Consulta de prestamo

let nombre_usuario = "";
let lista_prestamo = [];

while(nombre_usuario != "FIN"){
    
    console.log("<-----Prestamos----->");
    console.log("");

    nombre_usuario = prompt("Ingrese su Nombre o FIN para anular");
    if(nombre_usuario != "FIN"){
        let monto = prompt("Ingrese el monto:");
        monto = parseInt(monto);

        console.log("1 cuota: sin interes");
        console.log("3 cuotas: 20% de interes");
        console.log("6 cuotas: 50% de interes");
        console.log("12 cuotas: 80% de interes");

        let cuotas = prompt("Ingrese las cuotas:");
    
        // Crear objeto prestamo
        let prestamo = new Prestamo(nombre_usuario, monto, cuotas);
        prestamo.calcular_cuotas(monto, cuotas);
        lista_prestamo.push(prestamo);
    }
}


console.log(lista_prestamo);