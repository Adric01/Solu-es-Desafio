
   //função que vai inverter a string
   function inverter (string) {
        let stringinvertida = " ";

        for (let i = string.length - 1; i >= 0; i-- ){

           stringinvertida += string[i] 
        }
        return stringinvertida;
    }

    //variavel que vai armazenar o dado que vai ser manipulado
    let entradaString = "Exemplo"

    //variaval que armazena o resultado após ser manipulado
    let resultado = inverter(entradaString);
    console.log(resultado);  
