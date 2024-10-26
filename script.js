function verificar() {
    

    // Array para armazenar resultados
    let resultados = [];

    function calcular(efId, diaId, resId, res1Id, multiplicador) {
        let ef = document.getElementById(efId);
        let dia = document.getElementById(diaId);
        let res = document.getElementById(resId);
        let res1 = document.getElementById(res1Id);

        let cont = Number(ef.value) * Number(dia.value) * multiplicador;
        let f = cont.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        let d = ef.value ? (cont / Number(ef.value)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00';

        res.innerHTML = ef.value ? f : 'R$ 0,00';
        res1.innerHTML = d;

        return cont;
    }

    let totalCont = 0;

    // Chame a função calcular para cada conjunto de inputs
    totalCont += calcular('br', 'br1', 'res', 'res1', 229.02);
    totalCont += calcular('tc', 'tc1', 'resTC', 'resTC2', 225.00);
    totalCont += calcular('Maj', 'Maj1', 'resMaj', 'resMaj2', 221.76);
    totalCont += calcular('Cap', 'Cap1', 'resCap', 'resCap1', 182.70);
    totalCont += calcular('1ten', '1ten1', 'res1ten', 'res1ten1', 164.90);
    totalCont += calcular('2ten', '2ten1', 'res2ten', 'res2ten1', 149.80);
    totalCont += calcular('Asp', 'Asp1', 'resAsp', 'resAsp1', 146.30);
    totalCont += calcular('Sub', 'Sub1', 'resSub', 'resSub1', 123.38);
    totalCont += calcular('1Sgt', '1Sgt1', 'res1Sgt', 'res1Sgt1', 109.66);
    totalCont += calcular('2Sgt', '2Sgt1', 'res2Sgt', 'res2Sgt1', 95.40);
    totalCont += calcular('3Sgt', '3Sgt1', 'res3Sgt', 'res3Sgt1', 76.50);
    totalCont += calcular('Cb', 'Cb1', 'resCb', 'resCb1', 52.54);
    totalCont += calcular('Sd', 'Sd1', 'resSd', 'resSd1', 35.30);
    totalCont += calcular('SdEV', 'SdEV1', 'resSdEV', 'resSdEV1', 26.40);



    // Resultado total
    let resTOTAL = document.getElementById('resTotal');
    let totalFormatted = totalCont.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    resTOTAL.innerHTML = totalFormatted;
}