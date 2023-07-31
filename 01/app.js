let opcion = document.querySelector('select');
let saludo = "hola";

console.log(document.body);

opcion.addEventListener('change', e => {
    if(document.querySelector('p') == null) {
        crearParrafo(e.target.value);
    }else {
        eliminarParrafo();
        crearParrafo(e.target.value);
    }
});

const crearParrafo = nombre => {
    let parrafo = document.createElement('p');
    parrafo.innerText = `El día está ${nombre}`;
    document.body.appendChild(parrafo);
}

const eliminarParrafo = () => {
    document.querySelector('p').remove();
}