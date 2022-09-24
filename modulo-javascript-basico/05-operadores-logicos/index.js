/*
    ==  igual--A==B----verdadeiro se A for igual a B
    === idêntico--A===B----verdadeiro se A for idêntico a B
                As variáveis comparadas devem ser idênticas em valor e tipagem.
    !== não idêntico--A!==B----verdadeiro se A não for idêntico a B
    !=  diferente--A!=B----verdadeiro se A for diferente a B
    <   menor que--A<B----verdadeiro se A for menor que B
    <=   menor ou igual que--A<B----verdadeiro se A for menor ou igual que B
    >  maior que--A>B----verdadeiro se A for maior que B
    >=  maior ou igual que--A>=B----verdadeiro se A for maior ou igual que B

*/

// const a = 3
// const b = "3"
// console.log(a===b)
// não é idêntico pois um number o ou é string

const a = 3
const b = 3

// tabela verdade AND -&&
console.log(a===b && a<=b)
// v e v = v
console.log(a===b && a<b)
// v e f = f
console.log(a>b && a===b)
// f e v = f
console.log(a>b && a<b)
// f e f = f

// tabela verdade OR -||
console.log(a===b || a<=b)
// v e v = v
console.log(a===b || a<b)
// v e f = v
console.log(a>b || a===b)
// f e v = v
console.log(a>b || a<b)
// f e f = f

// tabela verdade NOT -!
console.log(!(a===b)) //false
console.group(!(a<b)) //true


