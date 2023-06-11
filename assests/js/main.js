const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Weight invalid', false) // peso invalid 
        return;
    }

    if (!altura) {                           // altura invalid
        setResultado('Height invalid')
        return;
    }
    const imc = getImc(peso, altura); //calculo do imc
    const nivelImc = getNivelImc(imc); // relacionar o calculo com a frase escrita
    

     const msg = `Your IMC is ${imc} (${nivelImc}).`;

    setResultado(msg, true);


    function getNivelImc() {  // um arrays de lista de strings para juntar com o calculo do imc
        const nivel = ['Under weight', 'Normal weight', 'Overweight', 'Degree of obesity 1'
            , 'Degree of obesity 2', 'Degree of obesity 3'];
        if (imc >= 39.9) return nivel[5]; 
        
        if (imc >= 34.9) return nivel[4];

        if (imc >= 29.9) return nivel[3];

        if (imc >= 24.9) return nivel[2];

        if (imc >= 18.5) return nivel[1];
        
        if (imc < 18.5)  return nivel[0];
    }
    function getImc(peso, altura) {
        let imc = peso / altura ** 2;
        return imc.toFixed(2);
    }



});

function createP() {
    const p = document.createElement('p');  // criação de paragrafo
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');  // enviar mensagem do resultado
    resultado.innerHTML = '';

    
    const p = createP();
    if (isValid) { p.classList.add('paragrafo-resultado');} else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p); 
}

//let Altura = 1.60
//let Peso = 60
//let resultado = (Peso / Altura) * Altura

//console.log(resultado)
//peso / altura * altura 


