document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let parrafo = document.querySelector('p');
    let edad = e.target[0].value;
    if(parrafo == null){
        crearParrafo(edad);
    }else {
        parrafo.remove();
        crearParrafo(edad)
    }
});

const crearParrafo = edad => {
    let parrafo = document.createElement('p');
    if(edad >= 18){
        parrafo.innerText = `Usted es mayor de edad`;
    }else {
        parrafo.innerText = `Usted es menor de edad`;
    }
    document.body.appendChild(parrafo);
}