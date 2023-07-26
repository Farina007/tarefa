const entrada1 = require("readline-sync");

let n = parseFloat(entrada1.question('Digite um numero: '))



if( n%1 === 0){
    console.log('inteiro')
}

else{console.log('Decimal')}