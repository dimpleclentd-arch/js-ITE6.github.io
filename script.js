function toggleTree(id) {
  let element = document.getElementById(id);
  let button = document.querySelector(`button[onclick*="${id}"]`);

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    // Change arrow from ▶ to ▼ when expanded
    button.textContent = button.textContent.replace("▶", "▼");
  } else {
    element.classList.add("hidden");
    // Change arrow back from ▼ to ▶ when collapsed
    button.textContent = button.textContent.replace("▼", "▶");
  }
}
