// Toggle visibility of a specific exercise tree
function toggleTree(id) {
  let element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

// Optional: ensure only one exercise tree is open at a time
function toggleExclusive(id) {
  let trees = document.querySelectorAll("ul[id^='exercise']");
  trees.forEach(tree => {
    if (tree.id === id) {
      tree.classList.toggle("hidden");
    } else {
      tree.classList.add("hidden");
    }
  });
}

// Optional: add arrow indicators (▶ / ▼) to buttons
function toggleWithArrow(button, id) {
  let element = document.getElementById(id);
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    button.textContent = button.textContent.replace("▶", "▼");
  } else {
    element.classList.add("hidden");
    button.textContent = button.textContent.replace("▼", "▶");
  }
}
