
// Every JS file act as a module in JS, This is main JS file
// We have to specify file extension while import for eg .js for Browser to load the file
// It is not mandatory to do that in webpack/babel

import {getFullName, getSurname } from './es6Modules.js';

console.log('Get Full Name:', getFullName('Preeti', 'Wadhwani'))
console.log('Get Surname Name:', getSurname('Preeti', 'Wadhwani'))




