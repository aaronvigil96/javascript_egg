document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let radio = e.target[0].value;
    if(document.querySelector('p') == null){
        crearParrafo(radio);
    }else {
        document.querySelector('p').remove();
        crearParrafo(radio);
    }
})

const crearParrafo = radio => {
    let parrafo = document.createElement('p');
    parrafo.innerText = `Area = ${Math.PI * Math.pow(radio,2)}\n Perimetro = ${2 * Math.PI * radio}`;
    document.body.append(parrafo);
}