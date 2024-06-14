
// Every JS file act as a module in JS, This is main JS file
// We have to specify file extension while import for eg .js for Browser to load the file
// It is not mandatory to do that in webpack/babel

// Named exports needs to be imported using the same name used while exporting them from a module
 import {getFullName, getSurname } from './es6Modules.js';


// Default exports can have any name for eg below using same and different name while importing default exports
// import getFullName from './es6Modules.js'
// import defaultFullName from './es6Modules.js'


console.log('Get Full Name:', getFullName('Preeti', 'Wadhwani'))
console.log('Get Surname Name:', getSurname('Preeti', 'Wadhwani'))




