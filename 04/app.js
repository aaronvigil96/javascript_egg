document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    if(document.querySelector('p') == null) {
        mensaje(e.target[0].value);
    }else {
        document.querySelector('p').remove();
        mensaje(e.target[0].value);
    }
})

const mensaje = letra => {
    let parrafo = document.createElement('p');
    if(letra === "S" || letra === "N"){
        parrafo.innerText = "Correcto";
    }else {
        parrafo.innerText = "Incorrecto";
    }
    document.body.appendChild(parrafo);
}