// This is a module which is completely isolated

// `. ES6 multiple module export
// In case of multiple module, write `export` keyword in the beginning
// We are exporting getFullName, getSurname function for outside usage

// Below are the named exports which means giving name to each of the export 
// and the same name we will use while importing a module

// A module cna have both single default export and multiple named exports

export const getFullName = (name, surname) => {
    return `${name} ${surname}`
}

export const getSurname = (name, surname) => {
    return surname;
}



// 2. ES6 default module export
// We are exporting getFullName function for outside usage
export default getFullName;






