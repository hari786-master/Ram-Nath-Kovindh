 // let index=0;
let bg_ele=document.querySelector(".container");
let className = document.querySelector(".container-1")
function show(box) {
  console.log(box);
  className.style.display = 'flex';
  className.classList.remove('foldOut'); // remove reverse animation if exists
  void className.offsetWidth; // Force reflow (restarts animation)
  className.classList.add('foldIn');
  if ('early_life' == box) {
    index = 0;
    className.style = 'display:flex'

    updateContent(index)
  } else if ('scl_life' == box) {
    index = 1;
    className.style = 'display:flex'
    updateContent(index)
  } else if ('clg_life' == box) {
    index = 2;
    className.style = 'display:flex'

    updateContent(index)
  } else if ('personal_life' == box) {
    index = 3;
    className.style = 'display:flex'

    updateContent(index)
  } else if ('family_life' == box) {
    index = 4;
    className.style = 'display:flex'

    updateContent(index)
  } else if ('throwback' == box) {
    index = 5;
    className.style = 'display:flex'

    updateContent(index)
  }

}
let head = document.querySelector("#head");
let image = document.querySelector("#imag");
let innercontent = document.querySelector("#content>p");
let gif = document.querySelector("#gif");

let contents = [
  //birth
  "Ram Nath Kovind was born on 1st October 1945 to Maiku Lal and Kalawati, in a humble Koli family at Paraunkh village, Kanpur Dehat, Uttar Pradesh, during the final years of the British Raj.\n\n\nGrowing up in these surroundings, he imbibed the values of hard work, community living, and resilience, which later shaped his worldview and leadership. Much like the harmony found in nature where flowers sustain bees, rivers quench the thirst of all beings, and trees offer shelter to birds his childhood taught him that true strength lies in togetherness and mutual support.",
  //school 
  "As a young student, Ram Nath Kovind displayed remarkable dedication to learning. He would often walk long distances to school, sometimes barefoot, and study late into the night under the glow of a lantern or kerosene lamp.\n\nHis village school, with limited teachers and modest facilities, instilled in him the importance of self-learning and perseverance. From an early age, he embodied qualities of discipline, punctuality, and calmness, rarely giving in to the distractions of childhood mischief.\n\nHis teachers recognized and admired his quiet confidence, sincerity, and focus, qualities that would later guide his journey of service and leadership.",
  //college
  "Ram Nath Kovind pursued higher education at DAV College, Kanpur, affiliated with Kanpur University (now Chhatrapati Shahu Ji Maharaj University), where he earned a Bachelor's degree in Commerce (B.Com) followed by a Law degree (LL.B).\n\nDeeply inspired by the vision of Dr. B.R. Ambedkar, he regarded law and education as instruments for social empowerment and upliftment of the underprivileged.\n\nMotivated by this belief, he appeared for the Civil Services Examination, qualifying on his third attempts a testament to his perseverance and commitment.",
  //personal
  "In 1974, Ram Nath Kovind married Savita Kovind, and together they built a family life rooted in simplicity, mutual respect, and shared values. Throughout his public journey, Savita Ji has been a quiet yet unwavering pillar of strength, providing steadfast support as he dedicated himself to service. Their family placed great emphasis on education, encouraging their children to study diligently and uphold the same values of discipline and sincerity that defined their home.\n\nTheir enduring partnership, strengthened by early struggles, stands as a testament to the power of trust, simplicity, and shared commitments values that have guided them through every phase of life.",
  //family
  "Ram Nath Kovind was the youngest of five brothers and two sisters. His father, Maiku Lal, was a shopkeeper, farmer, and also known in the village as a local healer, while his mother, Kalawati, was a devoted homemaker.\n\nGrowing up in a modest mud house, he vividly remembered monsoon rains seeping through the roof, and the struggles of children in his village who labored simply to secure a meal. These experiences remained with him throughout his life, shaping his compassion and sense of duty towards the underprivileged.\n\nYears later, reflecting on his journey, he humbly remarked:'I am going to Rashtrapati Bhavan as their representative'.",

  //throwback
  "Former President Ram Nath Kovind, a lifelong admirer of cricket, often expressed his appreciation for players such as M.S. Dhoni, who brought immense pride to India and placed Ranchi on the world map.\n\nTrue to his values of humility and service, he later donated his ancestral home and adjoining land in his native village, Paraunkh, to the Rashtriya Swayamsevak Sangh, where it was developed into a community center for the welfare of villagers.\n\nThis act, like many in his life, reflected his enduring belief that personal success finds its true meaning in service to society."

];

// School ( Classroom days)
// College ( Scholarly days)
// Personal (Life outside work)
// Family (Life with loved ones)
// Throwback (Echoes)

let heading = [
  "Birth", "Classroom Days", "Scholarly Days", "Life Outside Work", "Life With Loved Ones", "Echoes"
]
let images = ['images/image..webp', 'images/childhood 1.webp', 'images/image 2.webp', 'images/image 5.webp', 'images/image 1.webp', 'images/image 3.webp'];

console.log(contents)

const prevBtn = document.getElementById("left");
const nxtBtn = document.getElementById("right");

function updateContent(index) {
image.alt="loading...";
image.src = images[index];
  bg_ele.style.visibility="hidden";
  
  innercontent.innerText = contents[index];
  head.innerText = heading[index];
  if (index == 0) {
    prevBtn.style.visibility = "hidden";
    nxtBtn.style.visibility = "visible";
  }
  else if (index == heading.length - 1) {
    prevBtn.style.visibility = "visible";
    nxtBtn.style.visibility = "hidden";
  }
  else {
    prevBtn.style.visibility = "visible";
    nxtBtn.style.visibility = "visible";
  }
}

prevBtn.onclick=() => {
  if (index > 0) {
    updateContent(--index);
  }
};

nxtBtn.onclick=() => {
  if (index < contents.length - 1) {
    updateContent(++index);
  }
};
// className.onclick = () => {
//   className.style = 'display:none';
// }
document.querySelector("span").onclick = () => {
  className.style = 'display:none';
  bg_ele.style.visibility="visible";
}

document.querySelector("span").onclick = () => {
  className.classList.remove('foldIn');
  className.classList.add('foldOut');

  
  setTimeout(() => {
    className.style.display = 'none';
    bg_ele.style.visibility="visible";
  }, 500); 
};


let main = document.querySelector("main");

prevBtn.onclick = () => {
  if (index > 0) {
    main.classList.add("animate-left");
    setTimeout(() => {
      updateContent(--index);
      main.classList.remove("animate-left");
    }, 300); 
  }
};

nxtBtn.onclick = () => {
  if (index < contents.length - 1) {
    main.classList.add("animate-right");
    setTimeout(() => {
      updateContent(++index);
      main.classList.remove("animate-right");
    }, 300);
  }
};

