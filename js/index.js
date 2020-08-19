let preguntas = [
  {
    question: "¿En qué año se lanzó The Godfather por primera vez?",
    answers: ["1992", "1982", "1972"],
    rightAnswer: 2,
  },
  {
    question:
      "¿Qué actriz interpretó a Mary Poppins en la película de 1964 Mary Poppins?",
    answers: ["Julie Andrews", "Anne Bancroft", "Patricia Neal"],
    rightAnswer: 0,
  },
  {
    question:
      "¿Qué actor proporcionó la voz para el personaje de Nemo en la película de 2003 Finding Nemo?",
    answers: ["Robert Downey jr", "Alexander Gould", "Michael Douglas"],
    rightAnswer: 1,
  },
  {
    question:
      "¿Cuántos cameos autorreferenciales hizo Alfred Hitchcock en sus películas?",
    answers: ["19", "39", "8"],
    rightAnswer: 1,
  },
  {
    question: "¿Quién es el protagonista masculino de Only lovers left alive?",
    answers: ["Paul Dano", "Brad Pitt", "Tom Hiddleston"],
    rightAnswer: 2,
  },
  {
    question: "¿Quién es la protagonista femenina de Only lovers left alive?",
    answers: ["Helen Mirren", "Rosamund Pike", "Tilda Swinton"],
    rightAnswer: 2,
  },
  {
    question:
      "Si digo Volkswagen amarilla, Paul Dano, Steve Carrell...¿de qué hablo?",
    answers: ["28 days", "Little Miss Sunshine", "Love Actually"],
    rightAnswer: 1,
  },
  {
    question: "¿Qué comedia estrenó Daniel Sánchez Arévalo en 2011?",
    answers: ["Volver", "A cambio de nada", "Primos"],
    rightAnswer: 2,
  },
  {
    question: "¿Qué título ganó el Goya a mejor película en 1989",
    answers: [
      "Diario de invierno",
      "Mujeres al borde de un ataque de nervios",
      "Remando al viento",
    ],
    rightAnswer: 1,
  },
  {
    question: "¿Cuál de estas películas es indispensable?",
    answers: [
      "What we did on our holiday",
      "No What we did on our holiday",
      "No What we did on our holiday",
    ],
    rightAnswer: 0,
  },
];
console.log(preguntas);

let contador = 0;

let phase = `
             <article>
     <p> ${preguntas[contador].question} </p>
        <div class="respuestas">
        <p class="answer" id="first" onclick= "change()">${preguntas[contador].answers[0]}</a>
        <p class="answer" id="second" onclick= "change()">${preguntas[contador].answers[1]}</a>
        <p class="answer" id="third" onclick= "change()">${preguntas[contador].answers[2]}</a>
        </div>
     </article>
            `;
console.log(phase);

document.getElementById("question").innerHTML = phase;

let final = `
    <section id= "final">
    <article>
      <p>X ACIERTOS</p>
      <p>X FALLOS</p>
    </article>

    <a href="questions.html"> Start again</a>
    </section>
`;

function change() {
  if (contador < 9) {
    contador += 1;
    phase = `
  <article>
<p> ${preguntas[contador].question} </p>
<div class="respuestas">
<p class="answer" id="first" onclick= "change()">${preguntas[contador].answers[0]}</a>
<p class="answer" id="second" onclick= "change()">${preguntas[contador].answers[1]}</a>
<p class="answer" id="third" onclick= "change()">${preguntas[contador].answers[2]}</a>
</div>
</article>
 `;
    document.getElementById("question").innerHTML = phase;
  } else {
    //     final = `
    //     <section id= "final">
    //     <article>
    //       <p>X ACIERTOS</p>
    //       <p>X FALLOS</p>
    //     </article>

    //     <a href="questions.html"> Start again</a>
    //     </section>
    // `;
    //     document.getElementById("final").innerHTML = final;
    document.getElementById("question").innerHTML = final;
  }
}

// let respuesta1 = document.getElementById("first");
// respuesta1.onclick = () => {
//   contador += 1;
//   console.log(contador);
//   document.getElementById("question").innerHTML += phase;
// };
// document.getElementById("second").onclick = () => alert("clikeaste");
// document.getElementById("third").onclick = () => alert("clikeaste");

