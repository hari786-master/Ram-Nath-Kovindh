let imgArr = ["images/img4.webp" ,"images/image.jpg", "images/img1.webp", "images/img9.webp", "images/img2.webp", "images/img3.webp",""];
let text = [
    { title: "Ram Nath Kovind", subTitle: "14th President of India (2017–2022)" },
    { title: "Welcome to Zoho Schools", subTitle: "Where Curiosity Meets Opportunity" },
    { title: "Justice and Democracy", subTitle: " Statesman, Lawyer, and Politician" },
    { title: "Journey of Simplicity and Service", subTitle: "From Paraunkh Village to Rashtrapati Bhavan" },
    { title: "Leadership with Humility", subTitle: "Guiding with Integrity, Serving with Grace" },
    { title: "A Life Dedicated to the Nation", subTitle: "Dignity in Service, Integrity in Leadership" },
    { title: "An Inspiration for Generations", subTitle: "Guiding Values for Today and Tomorrow" },
    { title: "An Inspiration for Generations", subTitle: "Guiding Values for Today and Tomorrow" }
];

let slider = document.querySelector(".slider");


for (let i = 0; i < imgArr.length; i++) {
    slider.insertAdjacentHTML('beforeend', `
        <div class="imgDiv" style="background-image: url('${imgArr[i]}')">
            <h1>${text[i].title}</h1>
            <h2>${text[i].subTitle}</h2>
        </div>
    `);
}

let index = 0;
function showSlide() {
    if (index == imgArr.length - 1) {
        slider.style.transition = "none"
        index = 0
    }
    else {
        slider.style.transition = "2s"
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    index = (index + 1) % imgArr.length;
    showSlide();
}, 5000);
showSlide();
// showSlide();

//  const btn = document.getElementById('menuBtn');
//   const icon = document.getElementById('menuIcon');
//   const l1 = document.getElementById('line1');
//   const l2 = document.getElementById('line2');
//   const l3 = document.getElementById('line3');

//   btn.addEventListener('click', () => {
//     const open = btn.getAttribute('aria-expanded') === 'true';
//     btn.setAttribute('aria-expanded', String(!open));

//     if (!open) {
//       l1.animate([{ d: 'M3 6h18' }, { d: 'M4 4l16 16' }], { duration: 200, fill: 'forwards' });
//       l2.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 200, fill: 'forwards' });
//       l3.animate([{ d: 'M3 18h18' }, { d: 'M20 4L4 20' }], { duration: 200, fill: 'forwards' });
//       l1.setAttribute('d','M4 4l16 16');
//       l2.setAttribute('opacity','0');
//       l3.setAttribute('d','M20 4L4 20');
//     } else {
//       l1.animate([{ d: 'M4 4l16 16' }, { d: 'M3 6h18' }], { duration: 200, fill: 'forwards' });
//       l2.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: 'forwards' });
//       l3.animate([{ d: 'M20 4L4 20' }, { d: 'M3 18h18' }], { duration: 200, fill: 'forwards' });
//       l1.setAttribute('d','M3 6h18');
//       l2.setAttribute('opacity','1');
//       l3.setAttribute('d','M3 18h18');
//     }
//   });


























