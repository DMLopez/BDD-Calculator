const { setWorldConstructor } = require('cucumber')

class CustomWorld {
  constructor() {
    this.variable1 = 0;
    this.variable2 = 0;
    this.restulado = 0;
  }
  asignarOperandosSuma(number1,number2) {
    this.variable1 = number1;
    this.variable2 = number2;
  }
  sumar() {
    this.variable1 += this.variable2;
    this.restulado = this.variable1;
  }
}

setWorldConstructor(CustomWorld)