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
  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="section__task ${task.done ? "section__task--done" : ""}">
          ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  }

  const addNewTask = (newTaskContent) => {

    tasks.push({
      content: newTaskContent,
    });
    render();
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