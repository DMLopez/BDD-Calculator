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
    raiz() {
      var t; 
      var number = this.variable1; 
      var squareRoot = number / 2;   
      do {
        t = squareRoot;
        squareRoot = (t + (number/ t)) / 2;
      } while ((t - squareRoot) != 0);
      
      const decimals = 2;
      const asString = t.toString();
      const pos = asString.indexOf('.') != -1 ? asString.indexOf('.') + decimals + 1 : asString.length;
      this.resultado = parseFloat(t.toString().substring(0, pos));
    }
  }

  module.exports = FuncionesCalculadora