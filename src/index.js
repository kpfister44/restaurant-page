import pageLoad from "./page-load"
import menuLoad from "./menu"
import contactLoad from "./contact"
import 'bootstrap'

console.log("Hello youuuuuu")
pageLoad()
function activateHomeTab() {
    const home = document.querySelector(".home")
    home.addEventListener("click", pageLoad)
}
function activateMenuTab() {
    const menu = document.querySelector(".menu")
    menu.addEventListener("click", menuLoad)
}
function activateContactTab() {
    const contact = document.querySelector(".contact")
    contact.addEventListener("click", contactLoad)
}
activateHomeTab()
activateMenuTab()
activateContactTab()