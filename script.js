const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const render = arr => {
  const list = document.getElementById("todo-list");
  arr.forEach(a => {
    const newText = document.createTextNode(a);
    const newItem = document.createElement("LI");
    newItem.addEventListener("click", event =>
      event.target.classList.toggle("done")
    );
    newItem.addEventListener("dblclick", event =>
      event.target.classList.add("deleted")
    );
    newItem.appendChild(newText);
    list.appendChild(newItem);
  });
};

const addItem = () => {
  let searchValue = document.getElementById("newItem").value;
  searchValue !== "" && tasks.push(searchValue);
  render([tasks[tasks.length - 1]]);
  document.getElementById("newItem").value = "";
};

document.addEventListener("keyup", event => {
  event.keyCode === 13 && addItem();
});

render(tasks);
