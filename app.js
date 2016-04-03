'use strict';

var Calculator = require('./Calculator'),
		tin = 5,
		interestsPaymentFrequency = 1,
		tae;

//for (var property in calc) loop();

var myCalc = new Calculator();

tae = myCalc.calculateTae(tin, interestsPaymentFrequency);
console.log(tae);

function xinspect(o,i){
    if(typeof i=='undefined')i='';
    if(i.length>50)return '[MAX ITERATIONS]';
    var r=[];
    for(var p in o){
        var t=typeof o[p];
        r.push(i+'"'+p+'" ('+t+') => '+(t=='object' ? 'object:'+xinspect(o[p],i+'  ') : o[p]+''));
    }
    return r.join(i+'\n');
}
console.log('myCalc: ' + xinspect(myCalc));