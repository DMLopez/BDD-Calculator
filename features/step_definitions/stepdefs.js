const assert = require('assert');
const { Given, When, Then } = require('cucumber');


Given('El usuario quiere sumar {int} y {int}', function (int, int2) {
        this.asignarOperandos(int,int2);
    });
    When('El usuario ejecuta sumar', function () {
        this.sumar();
    });
    Then('El resultado de sumar será {int}', function (int) {
        assert.equal(this.variable1, parseInt(int));
    });

Given('El usuario quiere restar {int} y {int}', function (int, int2) {
        this.asignarOperandos(int,int2);
    });
    When('El usuario ejecuta restar', function () {
        this.restar();
    });
    Then('El resultado de restar será {int}', function (int) {
        assert.equal(this.variable1, parseInt(int));
    });

Given('El usuario quiere multiplicar {int} y {int}', function (int, int2) {
        this.asignarOperandos(int,int2);
    });
    When('El usuario ejecuta multiplicar', function () {
        this.multiplicar();
    });      
    Then('El resultado de multiplicar será {int}', function (int) {
        assert.equal(this.variable1, parseInt(int));
    });

Given('El usuario quiere dividir {int} y {int}', function (int, int2) {
        this.asignarOperandos(int,int2);
    });
    When('El usuario ejecuta dividir', function () {
        this.dividir();
    });
    Then('El resultado de dividir será {int}', function (int) {
        if(this.variable2 != 0)
            assert.equal(this.variable1, parseInt(int));
    });

Given('El usuario quiere obtener la raiz de {int}', function (int) {
        this.asignarOperandos(int,0);
    });
    When('El usuario ejecuta raiz', function () {
        this.raiz();
    });
    Then('El resultado de raiz será {float}', function (float) {
        assert.equal(this.variable1, parseFloat(float));
    });