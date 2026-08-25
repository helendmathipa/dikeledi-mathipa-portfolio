// ===============================
// 1. Welcome Animation
// ===============================

window.addEventListener("load", () => {

    console.log("Welcome to Dikeledi Helen Mathipa's Portfolio");

});


// ===============================
// 2. Dynamic Footer Year
// ===============================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    const year = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${year} Dikeledi Helen Mathipa. All rights reserved.`;

}


// ===============================
// 3. Smooth Scrolling Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){

            section.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ===============================
// 4. Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");


const revealSection = () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealSection
);


revealSection();


// ===============================
// 5. Back To Top Button
// ===============================


const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);



window.addEventListener("scroll", () => {


    if(window.scrollY > 400){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }


});


topButton.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


// ===============================
// 6. Skill Cards Interactive Effect
// ===============================


const cards = document.querySelectorAll(".card");


cards.forEach(card => {


    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });


});


// ===============================
// 7. Typing Effect For Introduction
// ===============================


const text = 
"Office Administration | Customer Service Professional";


let index = 0;


function typingEffect(){


    const title = document.querySelector("header h2");


    if(title && index < text.length){


        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(
            typingEffect,
            80
        );


    }


}


// Start typing effect

window.addEventListener(
"load",
() => {

const title = document.querySelector("header h2");

if(title){

title.innerHTML = "";

typingEffect();

}

});


// ===============================
// 8. CV Download Tracking
// ===============================


const cvButton = document.querySelector(
'a[href*="CV"]'
);


if(cvButton){

cvButton.addEventListener(
"click",
()=>{

console.log(
"CV downloaded by visitor"
);

});

}