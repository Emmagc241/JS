let allTodos = [];

document.getElementsByClassName("btn")[0].addEventListener("click", crear);

function todos(tarea) {
  this.tarea = tarea;
}

let contador = 0;
function crear() {
  let valor = document.getElementsByTagName("input")[0].value;

  if (valor != "") {
    allTodos[contador] = new todos(valor);
    document.getElementsByTagName("input")[0].value = "";
    mostrar();
    prueba();
    contador++;
  }
}

function mostrar() {
  let container = document.getElementsByClassName("tareas")[0];
  let element = document.createElement("div");
  element.classList.add("tarea");
  element.innerHTML = `
  <p class="tarea__text">${allTodos[contador].tarea}</p>
  <div class="botones">
  <select class="select" onchange="color()" >
    <option  value = "1">Prioridad</option>
    <option  value = "2">Media prioridad</option>
    <option  value = "3" selected>Baja prioridad</option>
    <option  value = "4"  >Terminada</option>
  </select>
    <div class="btn close"  >x</div>
  </div>
  
  `;
  container.appendChild(element);
}

function color() {
  let tarea = document.getElementsByClassName("tarea");

  for (let index = 0; index < contador; index++) {
    let textStyle = (tarea[index].querySelector("p").style.textDecoration =
      "none");
    let colorWhite = (tarea[index].style.color = "white");
    if (tarea[index].querySelector(".select").value == 1) {
      tarea[index].style.background = "crimson";
      colorWhite;
      textStyle;
    } else if (tarea[index].querySelector(".select").value == 2) {
      tarea[index].style.background = "#f0da1b";
      colorWhite;
      textStyle;
    } else if (tarea[index].querySelector(".select").value == 3) {
      tarea[index].style.background = "#15c472";
      colorWhite;
      textStyle;
    } else if (tarea[index].querySelector(".select").value == 4) {
      tarea[index].style.background = "#eee";
      tarea[index].style.color = "#221e1f";
      tarea[index].querySelector("p").style.textDecoration = "line-through";
    }
  }
}

function prueba() {
  document.querySelectorAll(".close").forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.style.display = "none";
    });
  });
}


