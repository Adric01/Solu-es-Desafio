
    //entrada de dados para o calculo percentual
    let faturamentoMensal = [
    {estado:"SP", faturamento: 67836.43},{estado:"RJ", faturamento: 36678.66},
    {estado:"MG", faturamento: 29229.88},{estado:"ES", faturamento: 27165.48},
    {estado:"outros", faturamento: 19849.53}
    ]

    //variavel que armazena o valor correspondente a 100%
    let soma = faturamentoMensal.reduce((acc, item) => acc += item.faturamento, 0);
    
    //variavel que armazena o valor percentual de cada estado e o estado que pertence
    let resultado = faturamentoMensal.map((item) => {
    let porcentagem = (item.faturamento / soma) * 100;
     return {
        estado: item.estado,
        porcentagem: porcentagem.toFixed(2) + '%'
       };

});

console.log(resultado);
