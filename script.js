document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  const li = document.createElement("li");
  li.textContent = `${name} (Roll No: ${roll})`;

  document.getElementById("studentList").appendChild(li);

  document.getElementById("studentForm").reset();
});