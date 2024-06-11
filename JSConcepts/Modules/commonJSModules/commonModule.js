// This is a module which is completely isolated

const getFullName = (name, surname) => {
    return `${name} ${surname}`
}

const getSurname = (name, surname) => {
    return surname;
}



// 1. CommonJS single module export
// We are exporting getFullName function for outside usage
// module.exports = getFullName;


// 2. CommonJS multiple module export
// In case of multiple module, export it as an object
// We are exporting getFullName, getSurname function for outside usage
module.exports = {
    getFullName,
    getSurname
};


