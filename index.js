const togglebtn = document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const bar2 = document.getElementsByClassName('bar2')[0]
const bar1 = document.getElementsByClassName('bar1')[0]
const bar3 = document.getElementsByClassName('bar3')[0]
const button = document.getElementsByClassName('btn-rs')[0]

togglebtn.addEventListener("click", () =>{
    navlinks.classList.toggle("active")
    navbar.classList.toggle('active')
    bar1.classList.toggle("active")
    bar2.classList.toggle("active")
    bar3.classList.toggle("active")
    button.classList.toggle("active")

})