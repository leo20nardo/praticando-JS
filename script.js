function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro]. Verifique se os dados estão corretos !');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança-menino.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'senhor.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-menina.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem.png');
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher-adulta.png');
            } else {
                // Idosa
                img.setAttribute('src', 'senhora.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Idade calculada: ${idade} anos <br>Detectamos ${genero} com ${idade} anos !`;
        res.appendChild(img);
    }
}
