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
        <li>
          ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
  }
  const init = () => {
    render();
  }
  init();
}