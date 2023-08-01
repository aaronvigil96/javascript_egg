let numeroA = 0;
let numeroB = 0;

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    numeroA = document.getElementById('numeroA').valueAsNumber;
    numeroB = document.getElementById('numeroB').valueAsNumber;
    if(isNaN(numeroA) || isNaN(numeroB)){
        mensajeError();
    }else {
        let opcion = document.querySelector('select').value;

        let parrafo = document.createElement('p');
        let resultado = 0;
        switch(opcion){
            case 'suma': 
                resultado = numeroA + numeroB;
                break;
            case 'resta': 
                resultado = numeroA - numeroB;
                break;
            case 'multiplicacion': 
                resultado = numeroA * numeroB;
                break;
            case 'division': 
                resultado = numeroA / numeroB;
                break;
        }
        parrafo.innerText = `El resultado de la ${opcion} es ${resultado}`;
        document.body.appendChild(parrafo);
    }
});

const mensajeError = () => {
    let parrafo = document.createElement('p');
    parrafo.innerText = "Se esperaban dos números";
    document.body.appendChild(parrafo);
}