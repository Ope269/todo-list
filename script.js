const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value.trim();

  if (task === "") return;

  const item = document.createElement("li");
  const text = document.createElement("span");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  text.textContent = task;
  completeButton.textContent = "Done";
  deleteButton.textContent = "Delete";

  completeButton.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  deleteButton.addEventListener("click", function () {
    item.remove();
  });

  item.append(text, completeButton, deleteButton);
  list.appendChild(item);

  input.value = "";
});
