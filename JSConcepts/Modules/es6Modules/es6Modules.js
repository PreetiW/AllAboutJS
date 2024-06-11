// This is a module which is completely isolated

// `. ES6 multiple module export
// In case of multiple module, write `export` keyword in the beginning
// We are exporting getFullName, getSurname function for outside usage

export const getFullName = (name, surname) => {
    return `${name} ${surname}`
}

export const getSurname = (name, surname) => {
    return surname;
}



// 2. ES6 single module export
// We are exporting getFullName function for outside usage
// export default getFullName;






