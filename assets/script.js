const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


let carouselIdx = 0;

window.addEventListener("load", () => {
    // paramétrage du premier dot selected lors du chargement de la page
    const dots = document.querySelectorAll(".dots > .dot");
     dots[carouselIdx].classList.add("dot_selected");
    
     // paramétrage du premier slide lors du chargement de la page avec l'image et la tagline
    const imageBanner = document.getElementById("bannerImg");
    let slide = slides[carouselIdx] ; 
    let slideImg = slide.image ; 
    imageBanner.src = `./assets/images/slideshow/${slideImg}`;
    

    const tagLineBanner = document.getElementById("tagLine");
    let tagLine = slide.tagLine ; 
    tagLineBanner.innerHTML = tagLine;

    // identification des flèches 
    const rightArrow = document.querySelector(".arrow_right");
    const leftArrow = document.querySelector(".arrow_left");

    rightArrow.addEventListener("click",() => {
        dots[carouselIdx].classList.remove("dot_selected"); // Retrait du dot selected en cours 
        carouselIdx++;
        if (carouselIdx > 3) carouselIdx = 0 ; // paramétrage du nombres de dots selected 
        dots[carouselIdx].classList.add("dot_selected"); // Ajout du dot selected au dot suivant 


        let slide = slides[carouselIdx] ; 
        let slideImg = slide.image ; 
        imageBanner.src = `./assets/images/slideshow/${slideImg}`; // Ajout du slideshow +1
        tagLineBanner.innerHTML = tagLine; // Ajout du tagLine+1
        } 
    
    )})
