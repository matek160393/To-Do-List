{
  let tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks = [
      ...tasks,
      { content: newTaskContent },
    ];
    render();
  };

  const removeTask = (taskIndex) => {

    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ];

    render();
  };

  const toggleTaskStatus = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done,
      },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  assignEvents = () => {

    const removeButtons = document.querySelectorAll(".js-tasksList__buttonRemove");

    removeButtons.forEach((removeButton, taskIndex) => {
      removeButton.addEventListener("click", () => {
        removeTask(taskIndex);
      });
    });

    const toggleStatusButtons = document.querySelectorAll(".js-tasksList__buttonStatus");

    toggleStatusButtons.forEach((toggleStatusButton, taskIndex) => {
      toggleStatusButton.addEventListener("click", () => {
        toggleTaskStatus(taskIndex);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString +=
        `
        <li class="tasksList__task">
          <button class="tasksList__buttonStatus tasksList__button js-tasksList__buttonStatus">${task.done ? "&#10004;" : ""}</button>
          <p class="tasksList__taskContent ${task.done ? "tasksList__taskContent--done" : ""}">
            ${task.content}
          </p> 
          <button class="tasksList__buttonRemove tasksList__button js-tasksList__buttonRemove">️️🗑</button>
        </li>
       `;
    }

    document.querySelector(".js-tasksList").innerHTML = htmlString;

    assignEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskElement = document.querySelector(".js-form__newTask");
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