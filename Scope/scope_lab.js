var globalVar = "I am a global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I'm a global constant";
{
    var blockVar = "Im a blocked scoped var";
    let blockLet = "I'm a block scoped let";
    const blockConst = "I'm a block scoped constant";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
console.log(blockVar);
console.log(blockLet);

function show () {
    var functionVar = "I'm a block scoped var";
    let functionLet = "I'm a block scoped let";
    const functionConst = "I'm a block scoped constant";
}

//console.log(blockVar);
//console.log(blockLet);
