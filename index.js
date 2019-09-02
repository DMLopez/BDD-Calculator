const FuncionesCalculadora = require('./app/funciones_calculadora.js')

// Instantiate Calculator
let FC = new FuncionesCalculadora()

// local variable definition
var op1, op2, operacion = "", msg = "";

// retrieving parameter data from command line
var params = process.argv.slice(2);
operacion = params[0];
op1 = ((params[1] != undefined) ? parseInt(params[1]) : undefined);
op2 = ((params[2] != undefined) ? parseInt(params[2]) : undefined);

// If there's operation name...
if(operacion != "" && operacion != undefined){
    try {        
        if(op1 != undefined && op2 == undefined){
            FC.asignarOperandos(op1,0);
            FC[operacion]()
            msg = "El resultado de "+operacion+" de "+op1+" es:";
            console.log(msg,FC.resultado);
        }if(op1 != undefined && op2 != undefined){
            FC.asignarOperandos(op1,op2);
            FC[operacion]()
            msg = "El resultado de "+operacion+" "+op1+" y "+op2+" es:";
            console.log(msg,FC.resultado);
        }else{
            msg = "Debe introducir al menos un operando y una operacion a realizar";
        }
    } catch (error) {
        msg = "\n· Debe introducir un nombre de operacion (sensible a mayúsculas): sumar, restar, multiplicar, dividir, raiz\n"+
          "· Ejemplo de uso:\n\n"+
          "    node index.js sumar 1 2         -->  3\n"+
          "    node index.js restar 5 3        -->  2\n"+
          "    node index.js multiplicar 10 3  -->  30\n"+
          "    node index.js dividir 10 2      -->  5\n"+
          "    node index.js raiz 9            -->  3\n";
        console.log("\nLa operacion \'"+operacion+"\' no se reconoce como una operación válida.\n"+msg);
    }
} else { // If there's no operation name...
    msg = "\n· Debe introducir un nombre de operacion (sensible a mayúsculas): sumar, restar, multiplicar, dividir, raiz\n"+
          "· Ejemplo de uso:\n\n"+
          "    node index.js sumar 1 2         -->  3\n"+
          "    node index.js restar 5 3        -->  2\n"+
          "    node index.js multiplicar 10 3  -->  30\n"+
          "    node index.js dividir 10 2      -->  5\n"+
          "    node index.js raiz 9            -->  3\n";
          console.log(msg);
}