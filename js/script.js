{
  const tasks = [
    {
      content: "zrobić zadanie domowe",
      done: true,
    },
    {
      content: "pójść na spacer",
      done: false,
    },
  ];

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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="section__task ${task.done ? "section__task--done" : ""}">
          <button class="js-section__buttonStatus">zrobione</button>
          <button class="js-section__buttonRemove">usuń zadanie</button>
          ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

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
  };




  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-form__newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);

  };

  const init = () => {
    render();

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };
  init();
}