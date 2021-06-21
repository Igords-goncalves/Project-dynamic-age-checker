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
        //Man ==========================================
        if (formSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 3) {
                //Bebe
                img.setAttribute('src', 'bebeman.jpg');
            } else 
                if (idade >= 3 && idade < 16) {
                //crianca
                img.setAttribute('src', 'kidman.jpg');
            } else 
                if (idade >= 16 && idade < 21) {
                //jovem
                img.setAttribute('src', 'youngman.jpg');
            } else 
                if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultman.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'oldman.jpg');
            }
        }
        //Woman ========================================== 
        else 
            if (formSex[1].checked) {
                genero = 'Mulher';
                if (idade >= 0 && idade < 3) {
                    //Bebe
                    img.setAttribute('src', 'bebewoman.jpg')
                } else 
                    if (idade >= 3 && idade < 16) {
                    //crianca
                    img.setAttribute('src', 'kidwoman.jpg')
                } else 
                    if (idade >= 16 && idade < 21) {
                    //jovem
                    img.setAttribute('src', 'youngwoman.jpg')
                } else 
                    if (idade >= 21 && idade < 50) {
                    //adulto
                    img.setAttribute('src', 'adultwoman.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'oldwoman.jpg')
                }
            }
            res.innerHTML = `Genero ${genero} com ${idade} anos`;
            res.appendChild(img);
    }
}