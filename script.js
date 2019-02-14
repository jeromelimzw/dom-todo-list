const tasks = ["wash the cat", "take a snack", "bring it back"];

const render = () => {
  document.getElementById("todo-list").remove();
  const div = document.getElementById("above-todo-list");
  const list = document.createElement("UL");
  list.id = "todo-list";
  div.appendChild(list);
  tasks.forEach(a => {
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
  render();
  document.getElementById("newItem").value = "";
};

document.addEventListener("keyup", event => {
  event.keyCode === 13 && addItem();
});

render();
