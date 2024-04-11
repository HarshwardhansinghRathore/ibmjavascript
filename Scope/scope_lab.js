var globalVar = 'I am aa globaal variable';
let globalLet = 'i  am a global variable but with let';
const globalConst = 'i am a global constant';
{
    var blockVar = 'i am a block code var'
    let blockLet = 'i an a block let'
    const blockConst = 'i am a block constant'
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
show();
    
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError