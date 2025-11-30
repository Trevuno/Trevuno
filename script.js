const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("content");

let sidebarVisible = false;

toggleBtn.addEventListener("click", () => {
  sidebarVisible = !sidebarVisible;

  if (sidebarVisible) {
    sidebar.classList.remove("hidden");
    toggleBtn.innerText = "Hide";
  } else {
    sidebar.classList.add("hidden");
    toggleBtn.innerText = "Menu";
  }
});




