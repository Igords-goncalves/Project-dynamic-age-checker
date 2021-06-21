function verificar() {
    var data = c = new Date();
    var ano = data.getFullYear();
    var formAno = document.querySelector('input#txtano');
    var res = document.querySelector('div#result');
    
    //Condition ========================================
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 3) {
                //Bebe
            } else 
                if (idade >= 3 && idade < 10) {
                //crianca
            } else 
                if (idade >= 10 && idade < 21) {
                //jovem
            } else 
                if (idade >= 21 && idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } 
        else 
            if (formSex[1].checked) {
                genero = 'Mulher';
                if (idade >= 0 && idade < 3) {
                    //Bebe
                } else 
                    if (idade >= 3 && idade < 10) {
                    //crianca
                } else 
                    if (idade >= 10 && idade < 21) {
                    //jovem
                } else 
                    if (idade >= 21 && idade < 50) {
                    //adulto
                } else {
                    //idoso
                }
            }
            res.innerHTML = `Genero ${genero} com ${idade} anos`;
    }
    
}