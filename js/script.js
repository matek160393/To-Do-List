{
  const tasks = [];

  const addNewTask = (newTaskContent) => {

    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskStatus = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  assignEvents = () => {

    const removeButtons = document.querySelectorAll(".js-section__buttonRemove");

    removeButtons.forEach((removeButton, taskIndex) => {
      removeButton.addEventListener("click", () => {
        removeTask(taskIndex);
      });
    });

    const toggleStatusButtons = document.querySelectorAll(".js-section__buttonStatus");

    toggleStatusButtons.forEach((toggleStatusButton, taskIndex) => {
      toggleStatusButton.addEventListener("click", () => {
        toggleTaskStatus(taskIndex);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="section__task">
          <button class="section__buttonStatus js-section__buttonStatus">${task.done ? "&#10004;" : ""}</button>
          <button class="section__buttonRemove js-section__buttonRemove">️️🗑</button>
           <p class="section__content ${task.done ? "section__content--done" : ""}">
             ${task.content}
           </p> 
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    assignEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskElement = document.querySelector(".js-form__newTask")
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }

    newTaskElement.focus();
  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
};