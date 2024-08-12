let elInput = document.querySelector("input");

function getTheValue(e) {
  if (e.key == "Enter") {
    document.querySelector("h4").textContent = e.target.value;
    console.log(e);
    e.target.value = ``;
  }
}

elInput.addEventListener("keypress", getTheValue);
