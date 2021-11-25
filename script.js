function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23

    //msg.innerHTML = 'Bons estudos, foco e determinação!'

    if (hora >= 18 && hora < 21) {
        // Estude HTML + CSS
        img.src = '/img/html5-redondo.jpg'
        msg.innerHTML = "Foco no seu objetivo, bons estudos!"
    } else if (hora >= 21 && hora <= 22) { 
        // Estude Javascript
        img.src = '/img/js-redondo.jpg'
        msg.innerHTML = "Foco no seu objetivo, bons estudos!"
    } else {
        // Vai dormir!!
        img.src = '/img/boa-noite.jpg'
        msg.innerHTML = "Bom descanso guerreiro, amanhã a luta continua!"
    }
}



