function createTask() {
  let taskText = document.querySelector(".todo__input").value;

  document.querySelector(".todo__bottom").insertAdjacentHTML(
    "afterend",
    `
  <div class="todo__task">
    <button class="todo__btn todo__btn-done btn-green btn" >Done</button> 
    <p class="todo__text">${taskText}</p>
    <button class="todo__btn todo__btn-remove btn-red btn" onclick="taskRemove()">Remove</button>
  </div>
  `
  );

  const todoText = document.querySelectorAll(".todo__text");
  console.log(todoText);
  const todoBtnDone = document.querySelectorAll(".todo__btn-done");
  console.log(todoBtnDone);

  todoBtnDone.forEach((item, i) => {
    const thisTodoText = todoText[i];

    todoBtnDone[i].addEventListener("click", () => {
      thisTodoText.classList.add("active");
      return;
    });
  });

  function taskRemove() {
    let todoTask = document.querySelectorAll(".todo__task");
    let todoBtnRemove = document.querySelectorAll(".todo__btn-remove");

    todoBtnRemove.forEach((item, i) => {
      const thisTodoTask = todoTask[i];

      thisTodoTask.addEventListener("click", () => {
        thisTodoTask.remove();
        return;
      });
    });
  }
}
