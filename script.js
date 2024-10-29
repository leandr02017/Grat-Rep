$(document).ready(function() {
    $(".hbg").click(function() {
        $('#tab').slideToggle();
    });

    $('button').on('click', function(e) {
        e.preventDefault();
        $('ul').empty();
        let totalCont = 0;

        function calcular(efId, diaId, resId, res1Id, multiplicador, nome) {
            let ef = $('#' + efId);
            let dia = $('#' + diaId);
            let res = $('#' + resId);
            let res1 = $('#' + res1Id);

            let efValue = Number(ef.val());
            let diaValue = Number(dia.val());
            let cont = efValue * diaValue * multiplicador;
            let f = cont.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            let d = efValue ? (cont / efValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00';
            

            res.html(efValue ? f : 'R$ 0,00');
            res1.html(d);

            // Adiciona uma linha para cada unidade de efValue
            for (let i = 0; i < efValue; i++) {
                const incluirLinha = $('<li></li>');
                incluirLinha.append('<p>Nome: </p>');
                incluirLinha.append('<p>P/Grad: ' + nome + '</p>');
                incluirLinha.append('<p>Prec-cep: </p>');
                incluirLinha.append('<p>Número de dias: ' + diaValue + ' dias</p>');
                incluirLinha.append('<p>Valor: ' + d + ' (' + numeroPorExtenso(cont) + ')</p>'); // Aqui chamamos a função
                incluirLinha.append('<br>');
                incluirLinha.appendTo('ul');
            }

            // Retorna o total calculado para somar no totalCont
            return cont;
        }

        // Chama a função calcular para cada categoria
        totalCont += calcular('cel', 'br1', 'res', 'res1', 229.02, 'Cel');
        totalCont += calcular('tc', 'tc1', 'resTC', 'resTC2', 225.00, 'Ten Cel');
        totalCont += calcular('Maj', 'Maj1', 'resMaj', 'resMaj2', 221.76, 'Maj');
        totalCont += calcular('Cap', 'Cap1', 'resCap', 'resCap1', 182.70, 'Cap');
        totalCont += calcular('1ten', '1ten1', 'res1ten', 'res1ten1', 164.90, '1º Ten');
        totalCont += calcular('2ten', '2ten1', 'res2ten', 'res2ten1', 149.80, '2º Ten');
        totalCont += calcular('Asp', 'Asp1', 'resAsp', 'resAsp1', 146.30, 'Asp');
        totalCont += calcular('Sub', 'Sub1', 'resSub', 'resSub1', 123.38, 'Sub Ten');
        totalCont += calcular('1Sgt', '1Sgt1', 'res1Sgt', 'res1Sgt1', 109.66, '1º Sargento');
        totalCont += calcular('2Sgt', '2Sgt1', 'res2Sgt', 'res2Sgt1', 95.40, '2º Sargento');
        totalCont += calcular('3Sgt', '3Sgt1', 'res3Sgt', 'res3Sgt1', 76.50, '3º Sargento');
        totalCont += calcular('Cb', 'Cb1', 'resCb', 'resCb1', 52.54, 'Cb');
        totalCont += calcular('Sd', 'Sd1', 'resSd', 'resSd1', 35.30, 'Sd EP');
        totalCont += calcular('SdEV', 'SdEV1', 'resSdEV', 'resSdEV1', 26.40, 'Sd EV');
        
        let resTOTAL = $('#resTotal');
        let totalFormatted = totalCont.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        resTOTAL.html(totalFormatted);
        function numeroPorExtenso(num) {
            const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
            const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
            const especiais = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
            const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
        
            const reais = Math.floor(num);
            const centavos = Math.round((num - reais) * 100);
            
            let resultado = '';
        
            // Parte dos reais
            if (reais === 0) {
                resultado += 'zero';
            } else if (reais === 1) {
                resultado += 'um';
            } else if (reais < 10) {
                resultado += unidades[reais];
            } else if (reais < 20) {
                resultado += especiais[reais - 10];
            } else if (reais < 100) {
                resultado += dezenas[Math.floor(reais / 10)] + (reais % 10 > 0 ? ' e ' + unidades[reais % 10] : '');
            } else if (reais < 1000) {
                resultado += centenas[Math.floor(reais / 100)] + (reais % 100 > 0 ? ' e ' + numeroPorExtenso(reais % 100) : '');
            } else {
                const milhar = Math.floor(reais / 1000);
                const resto = reais % 1000;
                resultado += numeroPorExtenso(milhar) + ' mil';
                if (resto > 0) {
                    resultado += ' ' + numeroPorExtenso(resto);
                }
            }
        
            // Adiciona "reais" apenas se houver reais
            if (reais > 0) {
                resultado += ' reais';
            }
        
            // Parte dos centavos
            if (centavos > 0) {
                resultado += ' e ';
                if (centavos === 1) {
                    resultado += 'um centavo';
                } else if (centavos < 10) {
                    resultado += unidades[centavos] + ' centavo' + (centavos > 1 ? 's' : '');
                } else if (centavos < 20) {
                    resultado += especiais[centavos - 10] + ' centavos';
                } else {
                    resultado += dezenas[Math.floor(centavos / 10)] + (centavos % 10 > 0 ? ' e ' + unidades[centavos % 10] : '') + ' centavos';
                }
            }
        
            // Remove qualquer "reais" duplicado e ajusta o resultado final
            resultado = resultado.replace(/reais reais/, 'reais').trim();
            return resultado.trim();
        }
        
        
    });
});



