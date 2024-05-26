const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let currentImageIndex = 0;
const dotsContainer = document.querySelector(".dots");


function updateBanner(index) {
    document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
}

function updateActiveDot(index) {
    const dots = document.querySelectorAll('.dot');
    document.querySelector(".dot_selected").classList.remove('dot_selected');
    dots[index].classList.add('dot_selected');
}

const dotContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (i == 0) {
        dot.classList.add("dot_selected")
    }
    dot.addEventListener("click", () => {
        updateBanner(i);
        updateActiveDot(i);
    });
    dotsContainer.appendChild(dot);
}

const arrows = document.querySelectorAll(".arrow")
for (const arrow of arrows) {
    arrow.addEventListener("click", (e) => {
        const side = e.target.dataset.side
        if (side == "L") {
            currentImageIndex--;
        } else {
            currentImageIndex++;
        }
        if (currentImageIndex < 0) {
            currentImageIndex = slides.length - 1;
        } else if (currentImageIndex >= slides.length) {
            currentImageIndex = 0;
        }
        updateBanner(currentImageIndex);
        updateActiveDot(currentImageIndex);
    })
}