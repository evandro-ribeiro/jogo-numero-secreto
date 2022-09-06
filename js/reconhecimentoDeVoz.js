const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    var chute = e.results[0][0].transcript;
    exibeChute(chute);
    validaChute(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

function validaChute(chute) {
    const numero = +chute;

    if (numero <= maiorValor && numero >= menorValor) {
        confereChute(chute);
    } else {
        elementoChute.innerHTML += `<div>Valor Inválido</div>`;
    }
}

function confereChute(chute) {
    if (chute == numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>

            <button id="jogar_novamente" class="btn_jogar">Jogar Novamente</button>
        `;
    } else if (chute > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar_novamente') {
        window.location.reload();
    }
})
