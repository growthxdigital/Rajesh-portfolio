const text = [
    "SEO Specialist",
    "WordPress Developer",
    "YouTube SEO Expert",
    "Digital Marketer"
];

let index = 0;
let charIndex = 0;

function typeEffect(){

    document.getElementById("typing").textContent =
        text[index].substring(0,charIndex);

    charIndex++;

    if(charIndex > text[index].length){

        setTimeout(()=>{

            charIndex = 0;

            index++;

            if(index >= text.length){

                index = 0;

            }

        },1200);

    }

}

setInterval(typeEffect,120);
