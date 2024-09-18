const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const listaUl = document.querySelector("ul");
  listaUl.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listaLi = createTaskItem(task);
    listaUl.appendChild(listaLi);
  }
}
renderElements(tasks);

function createTaskItem(task){
  const listaLi = document.createElement("li");
  listaLi.classList.add("task__item");

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-info__container");
  
  const spanContainer = document.createElement("span");
  spanContainer.classList.add("task-type");

  const paragraphContainer = document.createElement("p");
  paragraphContainer.classList.add("task-title");
  paragraphContainer.innerText = task.title;

  taskContainer.appendChild(spanContainer);
  taskContainer.appendChild(paragraphContainer);
  listaLi.appendChild(taskContainer);
  
  let tipo = task.type.toLowerCase();
  if (tipo === "urgente"){
    spanContainer.classList.add("span-urgent");
  } else if (tipo === "importante"){
    spanContainer.classList.add("span-important");
  } else if (tipo === "normal"){
    spanContainer.classList.add("span-normal");
  }
  
  const button = document.createElement('button');
  button.classList.add("task__button--remove-task");
  listaLi.appendChild(button);

  button.addEventListener('click', function(event){
    event.preventDefault();
    let posicao = -1;

  for(let i = 0; i < tasks.length; i++){
    if(tasks[i].title === task.title){
      posicao = i
    }
  }
  if(posicao !== -1){
    tasks.splice(posicao,1);
  }
  renderElements(tasks);  
})
return listaLi;
}

const form = document.querySelector('.form__container');
const input = document.querySelector('#input_title');
const select = document.querySelector('.form__input--priority')

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    const titulo = input.value;
    const tipo = select.value;  
    const obj ={
      title: titulo, type: tipo
    }
    input.value = ''
    tasks.push(obj);
    renderElements(tasks);
  });