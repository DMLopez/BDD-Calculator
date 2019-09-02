const { setWorldConstructor } = require('cucumber')

class CustomWorld {
  constructor() {
    this.variable1 = 0;
    this.variable2 = 0;
    this.restulado = 0;
  }
  asignarOperandos(number1,number2) {
    this.variable1 = number1;
    this.variable2 = number2;
  }
  sumar() {
    this.variable1 += this.variable2;
    this.restulado = this.variable1;
  }
  restar() {
    this.variable1 -= this.variable2;
    this.restulado = this.variable1;
  }
  multiplicar() {
    this.variable1 *= this.variable2;
    this.restulado = this.variable1;
  }
  dividir() {
    this.variable1 = this.variable1 / this.variable2;
    this.restulado = this.variable1;
  }
}

setWorldConstructor(CustomWorld);