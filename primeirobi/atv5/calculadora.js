const valorConta = 100.00;
const percentualGorjeta = 15;

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotalConta = valorConta + valorGorjeta;

// Mostrar resultado
console.log("=------=------=------=------=------=------=")
console.log(`Valor da Conta R$${valorConta}, Gorjeta (${percentualGorjeta}%): R$${valorGorjeta}`)
console.log(`Total a pagar R$${valorTotalConta}`)