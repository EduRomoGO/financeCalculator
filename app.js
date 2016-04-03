'use strict';

var Calculator = require('./Calculator'),
		classInspector = require('./classInspector'),
		tin = 5,
		interestsPaymentFrequency = 1,
		tae;

//for (var property in calc) loop();

var myCalc = new Calculator();

tae = myCalc.calculateTae(tin, interestsPaymentFrequency);
console.log(tae);

classInspector(myCalc);