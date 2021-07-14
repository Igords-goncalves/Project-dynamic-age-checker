function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.querySelector('input#txtano');
    var res = document.querySelector('div#result');

    //Condition ========================================
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value); //Conversão de entrada string p/ numero
        var genero = '';
        var img = document.createElement('img'); //Estou criando aqui ao inves de fazer isso no 
        img.setAttribute('id','foto');

        //Man ==========================================
        if (formSex[0].checked) { //Por padrão o elemento radio é representado por 0 e 1
            genero = 'Homem';
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', './img/bebeman.jpg');
            } else 
                if (idade >= 3 && idade < 16) {
                //crianca
                img.setAttribute('src', './img/kidman.jpg');
            } else 
                if (idade >= 16 && idade < 21) {
                //jovem
                img.setAttribute('src', './img/youngman.jpg');
            } else 
                if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', './img/adultman.jpg');
            } else {
                //idoso
                img.setAttribute('src', './img/oldman.jpg');
            }
        }

        //Woman ========================================== 
        else 
            if (formSex[1].checked) {
                genero = 'Mulher';
                if (idade >= 0 && idade < 3) {
                    //Bebe
                    img.setAttribute('src', './img/bebewoman.jpg')
                } else 
                    if (idade >= 3 && idade < 16) {
                    //crianca
                    img.setAttribute('src', './img/kidwoman.jpg')
                } else 
                    if (idade >= 16 && idade < 21) {
                    //jovem
                    img.setAttribute('src', './img/youngwoman.jpg')
                } else 
                    if (idade >= 21 && idade < 50) {
                    //adulto
                    img.setAttribute('src', './img/adultwoman.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', './img/oldwoman.jpg')
                }
            }

            //Resposta ao resultado obtido, usando um innerHTML - mostra na tela
            res.innerHTML = `Genero ${genero} com ${idade} anos`;
            res.appendChild(img);
    }
}