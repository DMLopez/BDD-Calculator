const { setWorldConstructor } = require('cucumber')

class FuncionesCalculadora {
  constructor() {
    this.variable1 = 0;
    this.variable2 = 0;
    this.resultado = 0;
  }
  asignarOperandos(number1,number2) {
    this.variable1 = number1;
    this.variable2 = number2;
  }
  sumar() {
    this.variable1 += this.variable2;
    this.resultado = this.variable1;
  }
  restar() {
    this.variable1 -= this.variable2;
    this.resultado = this.variable1;
  }
  multiplicar() {
    this.variable1 *= this.variable2;
    this.resultado = this.variable1;
  }
  dividir() {
    this.variable1 = this.variable1 / this.variable2;
    this.resultado = this.variable1;
  }
}

setWorldConstructor(FuncionesCalculadora);