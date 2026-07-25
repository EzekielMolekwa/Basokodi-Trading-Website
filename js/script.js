const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(nextSlide,6000);
/* ==========================
      HIGHLIGHT CAROUSEL
========================== */

const cards = document.querySelectorAll(".highlight-card");

const dots = document.querySelectorAll(".dot");

let active = 0;

function rotateCards(){

    cards.forEach(card=>{

        card.classList.remove("active","prev","next");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    active++;

    if(active>=cards.length){

        active=0;

    }

    let prev = active-1;

    if(prev<0){

        prev=cards.length-1;

    }

    let next = active+1;

    if(next>=cards.length){

        next=0;

    }

    cards[active].classList.add("active");

    cards[prev].classList.add("prev");

    cards[next].classList.add("next");

    dots[active].classList.add("active");

}

setInterval(rotateCards,4000);
/* ==========================
      SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".about-images, .about-content"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

revealElements.forEach(element=>{

    observer.observe(element);

});