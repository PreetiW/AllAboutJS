# Modules in JavaScript

 Every JS file act as a module in JS. Modules works similar way which is we can export one or more things and import it wherever needed. Below are two types of Modules in JavaScript. 


## CommonJS Modules

* `module.exports` to export a module
* `require` is a special keyword from CommonJS Modules to import a module
* `require` is a function hence we can write it inside `if` statements
* NodeJS modular system is CommonJS and CommonJS modules don't exist in Browser hence we can't run it in browser directly but can use using `node` for eg `node main.js`



## ECMAScript(ES6) modules

* works in browser by default
* use `export` keyword to export a module and `import` keyword to import a module
* In case of single export `export default --name--`
* In case of multiple export, write `export` keyword in the beginning
* add `type="module"` in the script tag
* specify `.js` extension for file while importing a module, It is not mandatory to do that in webpack/babel


### Difference Between Default and Named export in ES6 modules?

**Named exports**

* which means **giving a name** to each of the export 
* same name we will use while importing a module, but we can create its alias by using [as operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* Check `es6Modules.js` & `main.js` for example reference.
* We can have multiple named exports per module


**Default exports**

* It is used to export a single value as a default value for a module.
<br> This value can be a variable, function, class or any other JavaScript entity
* while importing a default export, we can assign it any name we want. 
* Check `es6Modules.js` & `main.js` for example reference.
* We can only have **one default export** per module



------

## Difference between CommonJS & ES Modules

| CommonJS Modules | ECMAScript(ES6) modules |
| ---              |                     --- |
| import using `require` keyword, <br> `require` is a function| import using `import` statement|
| NodeJS modular system is CommonJS <br> default support in NodeJS | works in browser by default  |
| `module.exports` to export modules | `export default` & `export`   statements to export a module  |


## Why ES6 Modules are better? Why they were invented at all?

* 





 ## References

* [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [CommonJS modules - the original way to package JavaScript code for Node.js](https://nodejs.org/api/modules.html)
* [Modules: ECMAScript modules](https://nodejs.org/api/esm.html)
* [https://www.youtube.com/watch?v=KeBxopnhizw](JavaScript Modules Crash Course)
* [https://www.youtube.com/watch?v=mK54Cn4ceac](Require vs Import Javascript)