import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
  }
});

console.log(
  "\n hey 👋, what are you doing? \n feel free to say hi via twitter (@sefael1) or email (sefaelbir@gmail.com)\n\n - sefa"
);