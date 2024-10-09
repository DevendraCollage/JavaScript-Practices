// Write a JavaScript program to clone a given regular expression.

const cloneRegExp = () => new RegExp(regExp.source, regExp.flags);

const regExp = /lorem ipsum/gi;
console.log(regExp);

const regExp2 = cloneRegExp(regExp);
console.log(regExp2);
