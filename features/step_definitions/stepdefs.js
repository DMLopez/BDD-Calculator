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
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });
    When('El usuario ejecuta multiplicar', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });      
    Then('El resultado de multiplicar será {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });