const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const body = document.querySelector("body")

btn.addEventListener("click", () => {
    body.classList.toggle("darkmode")
})