

const socialMediaSvgs = [
{
svg:`<svg aria-hidden="true" role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<title>Facebook</title>
<path d="M22 12.073C22 6.507 17.523 2 12 2S2 6.507 2 12.073C2 17.091 5.657 21.256 10.438 22v-7.01H7.898v-2.917h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.444 2.917h-2.329V22C18.343 21.256 22 17.091 22 12.073z"/>
</svg>
`,
link:"https://www.facebook.com/PresidentOfIndia14/"
},
{
    svg:`<svg aria-hidden="true" role="img" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>Twitter</title>
    <path d="M22.162 5.656c-.646.287-1.34.48-2.068.568.744-.444 1.314-1.147 1.583-1.986-.696.412-1.467.712-2.287.873A3.98 3.98 0 0 0 12.06 8c0 .312.036.615.103.906C8.01 8.838 4.624 6.98 2.207 4.03c-.342.585-.538 1.263-.538 1.988 0 1.372.697 2.583 1.758 3.294-.647-.02-1.257-.199-1.79-.495v.05c0 1.917 1.366 3.515 3.178 3.877-.333.09-.684.138-1.046.138-.255 0-.503-.025-.744-.071.504 1.577 1.968 2.72 3.699 2.752A7.977 7.977 0 0 1 2 19.54 11.26 11.26 0 0 0 7.548 21c7.137 0 11.04-5.997 11.04-11.2 0-.171-.004-.34-.012-.507.758-.548 1.416-1.234 1.936-2.019z"/>
  </svg>
  `,
  link:"https://x.com/ramnathkovind"
},
{
    svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" role="img" aria-label="Instagram">
  <path fill="#282120" d="M349.33 69.33H162.67C107.2 69.33 64 112.53 64 168v180.01c0 55.47 43.2 98.67 98.67 98.67h186.67C404.8 446.67 448 403.47 448 348V168c0-55.47-43.2-98.67-98.67-98.67zM256 164.53c50.88 0 92.27 41.39 92.27 92.27S306.88 349.07 256 349.07 163.73 307.68 163.73 256 205.12 164.53 256 164.53zm118.4-55.47a22.4 22.4 0 1 1 0 44.8 22.4 22.4 0 0 1 0-44.8zM256 205.33a50.67 50.67 0 1 0 0 101.33 50.67 50.67 0 0 0 0-101.33z"/>
</svg>

  `,
  link:"https://www.instagram.com/presidentofindia14/?hl=en"
}
]



let footer = document.querySelector("footer")
footer.insertAdjacentHTML("beforeend",`
<div>
<div>

    <div>
        <p>
            © 2025 Zoho Schools , Tenkasi 
        </p>
    </div>
    <div class="SocialIcons">
        
    </div>
</div>
<div>
`)

let SocialIcons = document.querySelector(".SocialIcons")

for(let i=0;i<socialMediaSvgs.length;i++){
    SocialIcons.insertAdjacentHTML("beforeend",`
    
     <div>
    <a href="${socialMediaSvgs[i].link}">
        ${socialMediaSvgs[i].svg}
    </a>
    </div>

    `)
}



