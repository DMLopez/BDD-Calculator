const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I have number {int} in calculator', function (int) {
    this.setTo(int);
});
When('I entered number {int}', function (int) {
    this.incrementBy(int);
});
Then('I should see result {int}', function (int) {
    assert.equal(this.variable, parseInt(int));
});
