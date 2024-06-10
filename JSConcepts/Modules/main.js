
// Every JS file act as a module in JS, This is main JS file

// Let's import commonJS Module, require is a special keyword from CommonJS Modules
// NodeJS modular system is CommonJS and CommonJS modules don't exist in Browser

//const getFullName = require('./commonJSModule')

// import multiple functions from CommonJS module

const {getFullName, getSurname } = require('./commonJSModule')

console.log('Get Full Name:', getFullName('Preeti', 'Wadhwani'))
console.log('Get Surname Name:', getSurname('Preeti', 'Wadhwani'))

console.log("CommonJS Modules")



