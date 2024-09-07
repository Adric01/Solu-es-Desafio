//função que avalia se o resultado é um quadrado perfeito
function quadradoPerfeito (n){
if (n < 0) return false;
var raizQuadrada = Math.sqrt(n);
return raizQuadrada === Math.floor(raizQuadrada);
}
//entrada do numero que sera testado
var numero = parseInt(prompt("Informe o número para o teste:"), 10);

//usando a formula para calcular se faz parte da sequencia fibonacci
function calcularFibonacci (numero){
 let formula1 = 5*Math.pow(numero,2) + 4;
 let formula2 = 5*Math.pow(numero,2) - 4;

 return quadradoPerfeito(formula1) || quadradoPerfeito(formula2);
}

//condição para resposta se faz parte ou não da sequencia 
if (calcularFibonacci(numero)) {
    alert("Este número faz parte da sequência de Fibonacci");
} 
else { alert("Este número não faz parte da sequência de Fibonacci");
}
