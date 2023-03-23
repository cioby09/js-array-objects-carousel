// Consegna
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


// Creo l'array contenente le immagini
const gameArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const jumbotronContainer = document.querySelector(".slider-jumbotron");
const sliderContainer = document.querySelector(".lateral-slide");
const infoContainer = document.querySelector(".info");

// Creo il ciclo che mi permette di creare un div per ogni immagine del jumbotron
for (let i = 0; i < gameArray.length; i++) {
    const currentImage = gameArray.map(element=> element.image) [i];

    const jumbotronItem = `
        <div class="jumbotron-item">
            <img src="${currentImage}" alt="">
        </div>`;

    // Inserisco gli elementi creati nel container "slider-jumbotron"
    jumbotronContainer.innerHTML += jumbotronItem;
}

// Creo il ciclo per inserire le informazioni
for (let i = 0; i < gameArray.length; i++) {
    const currentTitle = gameArray.map(element=> element.title) [i];
    const currentText = gameArray.map(element=> element.text) [i];

    const infoItem = `<div class="game-info hidden"><h1 class="title">${currentTitle}</h1>
     <p class="description">${currentText}</p></div>`;

    // Inserisco gli elementi creati nel container "slider-jumbotron"
    infoContainer.innerHTML += infoItem;
}

// Creo il ciclo che mi permette di creare un div per ogni immagine dello slider laterale
for (let i = 0; i < gameArray.length; i++) {
    const currentImage = gameArray.map(element=> element.image) [i];

    const sliderItem = `
        <div class="slider-item">
            <img src="${currentImage}" alt="">
        </div>`;

    // Inserisco gli elementi creati nel container "lateral-slide"
    sliderContainer.innerHTML += sliderItem;
}

const jumbotronItemsArray = document.getElementsByClassName("jumbotron-item");
const sliderItemsArray = document.getElementsByClassName("slider-item");
const infoArray = document.getElementsByClassName("game-info");

//Fisso la prima immagine e aggiungo il bordo all'immagine attiva
let activeItemIndex = 0;
jumbotronItemsArray[activeItemIndex].classList.add("active");
infoArray[activeItemIndex].classList.remove("hidden");
sliderItemsArray[activeItemIndex].classList.add("current-border");

// Gestisco il click sul bottone "down"
const downBtn = document.querySelector(".down");

downBtn.addEventListener("click", 

    function() {

        if (activeItemIndex < (jumbotronItemsArray.length - 1)) {

            // Tolgo "active" dalla slide corrente e il bordo
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");
            infoArray[activeItemIndex].classList.add("hidden");

            // Incremento il valore di "activeIndex"
            activeItemIndex++;

            // Aggiungo "active" alla prossima slide
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");
            infoArray[activeItemIndex].classList.remove("hidden");

          // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
          // Se sono all'ultima slide  
        } else if (activeItemIndex === jumbotronItemsArray.length - 1) {

            // Tolgo "active" dalla slide corrente
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");
            infoArray[activeItemIndex].classList.add("hidden");
            // Il valore di "activeIndex" torna a quello della prima slide
            activeItemIndex = 0;

            // Aggiungo "active" alla prossima slide
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");
            infoArray[activeItemIndex].classList.remove("hidden");

        }

    }

);

// Gestisco il click sul bottone "up"
const upBtn = document.querySelector(".up");

upBtn.addEventListener("click", 

    function() {

          // Se mi trovo alla prima slide rendo lo scorrimento continuo  
          // Se sono alla prima slide
         if (activeItemIndex === 0) {

            // Tolgo "active" dalla slide corrente
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");
            infoArray[activeItemIndex].classList.add("hidden");

            // Il valore di "activeIndex" torna a quello dell'ultima slide
            activeItemIndex = jumbotronItemsArray.length - 1;

            // Aggiungo "active" alla slide precedente
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");
            infoArray[activeItemIndex].classList.remove("hidden");

         } else if (activeItemIndex < (jumbotronItemsArray.length)) {

            // Tolgo "active" dalla slide corrente
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");
            infoArray[activeItemIndex].classList.add("hidden");

            // Decremento il valore di "activeIndex"
            activeItemIndex--;

            // Aggiungo "active" alla slide precedente
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");
            infoArray[activeItemIndex].classList.remove("hidden");

         }

    }

)

// Gestisco l'autoplay del carousel

const autoplay = setInterval(nextElement, 3000);

function nextElement() {

    if (activeItemIndex < (jumbotronItemsArray.length - 1)) {

        // Tolgo "active" dalla slide corrente
        jumbotronItemsArray[activeItemIndex].classList.remove("active");
        sliderItemsArray[activeItemIndex].classList.remove("current-border");
        infoArray[activeItemIndex].classList.add("hidden");

        // Incremento il valore di "activeIndex"
        activeItemIndex++;

        // Aggiungo "active" alla prossima slide
        jumbotronItemsArray[activeItemIndex].classList.add("active");
        sliderItemsArray[activeItemIndex].classList.add("current-border");
        infoArray[activeItemIndex].classList.remove("hidden");

      // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
      // Se sono all'ultima slide  
    } else if (activeItemIndex === jumbotronItemsArray.length - 1) {

        // Tolgo "active" dalla slide corrente
        jumbotronItemsArray[activeItemIndex].classList.remove("active");
        sliderItemsArray[activeItemIndex].classList.remove("current-border");
        infoArray[activeItemIndex].classList.add("hidden");
        // Il valore di "activeIndex" torna a quello della prima slide
        activeItemIndex = 0;
        // Aggiungo "active" alla prossima slide
        jumbotronItemsArray[activeItemIndex].classList.add("active");
        sliderItemsArray[activeItemIndex].classList.add("current-border");
        infoArray[activeItemIndex].classList.remove("hidden");

    }

}