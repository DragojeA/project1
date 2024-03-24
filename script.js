var input = document.getElementById("input-box");
var list = document.getElementById("list-container");
function addTask() {
  if (!input.value.trim()) {
    alert("Polje ne smije biti prazno!");
  } else {
    var listItem = document.createElement("li");
    listItem.innerText = input.value;
    list.appendChild(listItem);
    var span = document.createElement("span");
    span.innerText = "X";
    listItem.appendChild(span);
    input.innerText = "";
  }

  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.add("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentNode.classList.remove("checked");
    }
  });
}
