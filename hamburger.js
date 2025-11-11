

let crossIcon = document.querySelector(".crossIcon")
crossIcon.classList.toggle("hamIconNone")
let hamburgerIcon = document.querySelector('.hamburgerIcon');
let i = 0
hamburgerIcon.addEventListener('click', () => {


    let nav = document.querySelector("nav")
    if (i == 0) {
        nav.insertAdjacentHTML("beforeend", `
  
<div class="hamdiv">
     <ul>
         <li><a href="earlyLife.html">Early life</a></li>
        <li><a href="professionalCareer.html">Professional Career</a></li>
        <li><a href="awards.html">Awards & Honours</a></li>
        <li><a
                href="gallery.html">Gallery</a>
        </li>
        </ul>
</div>
  `)

    }

    i = 1

});

hamburgerIcon.addEventListener('click', () => {

    let open = document.querySelector(".open")
    if (open && i == 1) {
        open.remove()
        i = 0
    }
    let hamdiv = document.querySelector(".hamdiv")
    if (hamdiv) {
        hamdiv.classList.toggle("open")
    }

    let hamIcon = document.querySelector(".hamIcon")
    hamIcon.classList.toggle("hamIconNone")
    let crossIcon = document.querySelector(".crossIcon")
    crossIcon.classList.toggle("hamIconNone")
})
