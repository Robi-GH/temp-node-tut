// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
//const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
//console.log(names);
const data = require('./6-alternative-flavor');
//console.log(data);
//require('./7-mind-grenade');// ako requiraš ono envoka module zato se izvrsi funkcija

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
//sayHi(john);
//sayHi(peter);