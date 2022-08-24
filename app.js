function createTask() {
  const taskText = document.querySelector(".todo__input").value;
  console.log(taskText);
  const todoInfo = document.querySelector(".todo__info");

  if (taskText == "") {
    todoInfo.classList.add("error");
    todoInfo.innerHTML = `
    Error, you cannot add an empty entry
`;
  } else {
    todoInfo.classList.remove("error");
    todoInfo.innerHTML = `

`;
    document.querySelector(".todo__bottom").insertAdjacentHTML(
      "afterend",
      `
  <div class="todo__task">
    <button class="todo__btn todo__btn-done btn-green btn" >Done</button> 
    <p class="todo__text">${taskText}</p>
    <button class="todo__btn todo__btn-remove btn-red btn">Remove</button>
  </div>
  `
    );
  }

  const todoText = document.querySelectorAll(".todo__text");
  // console.log(todoText);
  const todoBtnDone = document.querySelectorAll(".todo__btn-done");
  // console.log(todoBtnDone);

  todoBtnDone.forEach((item, i) => {
    const thisTodoText = todoText[i];

    todoBtnDone[i].addEventListener("click", () => {
      thisTodoText.classList.add("active");
      return;
    });
  });

  const todoTask = document.querySelectorAll(".todo__task");
  // console.log(todoTask);
  const todoBtnRemove = document.querySelectorAll(".todo__btn-remove");
  // console.log(todoBtnRemove);

  todoBtnRemove.forEach((item, i) => {
    const thisTodoTask = todoTask[i];

    todoBtnRemove[i].addEventListener("click", () => {
      thisTodoTask.remove();
      return;
    });
  });
}
