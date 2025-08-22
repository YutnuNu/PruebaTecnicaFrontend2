const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const preguntaActual = document.getElementById("preguntaActual");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");

const preguntas = [
    {
        id:1,
        pregunta:"¿Cuál es la raíz de 25?",
        opciones:["3","8","5","9"],
        opcioncorrecta:2
    },
    {
        id:2,
        pregunta:"¿Cuál es la capital de México?",
        opciones:["Chihuahua","Puerto Rico","Cd México","Estado de México"],
        opcioncorrecta:2
    },
    {
        id:3,
        pregunta:"¿Cuál es mi tercer nombre?",
        opciones:["Yutnu","Leni","Ania","Iyadzene"],
        opcioncorrecta:0
    },
    {
        id:4,
        pregunta:"¿Quién desarrolló la teoría de la relatividad?",
        opciones:["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        opcioncorrecta:1
    },
    {
        id:5,
        pregunta:"¿Cuál es el planeta más grande del sistema solar?",
        opciones:["Tierra", "Júpiter", "Saturno", "Neptuno"],
        opcioncorrecta:1
    },
    {
        id:6,
        pregunta:"¿Cuál es el símbolo químico del oro?",
        opciones:["Ag", "H", "O", "Au"],
        opcioncorrecta:3
    },
    {
        id:7,
        pregunta:"¿En qué año llegó el hombre a la Luna?",
        opciones:["1965", "1969", "1972", "1980"],
        opcioncorrecta:1
    },
    {
        id:8,
        pregunta:"¿Cuál es la raíz de 36?",
        opciones:["5", "6", "7", "8"],
        opcioncorrecta:1
    },
    {
        id:9,
        pregunta:"¿Cuál es el océano más grande del mundo?",
        opciones:["Atlántico", "Índico", "Pacífico", "Ártico"],
        opcioncorrecta:2
    },
    {
        id:10,
        pregunta:"¿Qué instrumento mide la presión atmosférica?",
        opciones:["Termómetro", "Barómetro", "Anemómetro", "Higrómetro"],
        opcioncorrecta:1
    }
]

btnAnterior.addEventListener("click",anteriorPregunta);
btnSiguiente.addEventListener("click",siguientePregunta);

let contador = 0;

function cambiarPregunta(){
    const P = preguntas[contador];

    preguntaActual.textContent = `Pregunta: ${contador+1}`;
    pregunta.textContent = P.pregunta;
    opciones.innerHTML = "";

    P.opciones.forEach((op,i) => {
        const opcionN = document.createElement("div");
        opcionN.classList.add("form-check");
        opcionN.innerHTML= `
                            <input class="form-check-input" type="radio" name="radioDefault" id="opcion${i}">
                            <label class="form-check-label" for="opcion${i}">${op}</label>
                         `;
                         opciones.appendChild(opcionN);
    });
    
}

function anteriorPregunta(){
    if (contador > 0){
        contador--;
        cambiarPregunta();
    }
}

function siguientePregunta(){
    if (contador < preguntas.length - 1){
        contador++;
        cambiarPregunta();
    }
}

cambiarPregunta();