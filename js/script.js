// Creo l'array contenente le immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

const jumbotronContainer = document.querySelector(".slider-jumbotron");
const sliderContainer = document.querySelector(".lateral-slide");

// Creo il ciclo che mi permette di creare un div per ogni immagine del jumbotron
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const jumbotronItem = `
        <div class="jumbotron-item">
            <img src="${currentImage}" alt="">
        </div>`;

        // Inserisco gli elementi creati nel container "slider-jumbotron"
        jumbotronContainer.innerHTML += jumbotronItem;
}

// Creo il ciclo che mi permette di creare un div per ogni immagine dello slider laterale
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const sliderItem = `
        <div class="slider-item">
            <img src="${currentImage}" alt="">
        </div>`;

        // Inserisco gli elementi creati nel container "lateral-slide"
        sliderContainer.innerHTML += sliderItem;
}

const jumbotronItemsArray = document.getElementsByClassName("jumbotron-item");
const sliderItemsArray = document.getElementsByClassName("slider-item");

//Fisso la prima immagine e aggiungo il bordo all'immagine attiva
let activeItemIndex = 0;
jumbotronItemsArray[activeItemIndex].classList.add("active");
sliderItemsArray[activeItemIndex].classList.add("current-border");

// Gestisco il click sul bottone "down"
const downBtn = document.querySelector(".down");

downBtn.addEventListener("click", 

    function() {

        if (activeItemIndex < (jumbotronItemsArray.length - 1)) {

            // Tolgo "active" dalla slide corrente e il bordo
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");

            // Incremento il valore di "activeIndex"
            activeItemIndex++;

            // Aggiungo "active" alla prossima slide
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");

          // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
          // Se sono all'ultima slide  
        } else if (activeItemIndex === jumbotronItemsArray.length - 1) {

             // Tolgo "active" dalla slide corrente
             jumbotronItemsArray[activeItemIndex].classList.remove("active");
             sliderItemsArray[activeItemIndex].classList.remove("current-border");

             // Il valore di "activeIndex" torna a quello della prima slide
             activeItemIndex = 0;
 
             // Aggiungo "active" alla prossima slide
             jumbotronItemsArray[activeItemIndex].classList.add("active");
             sliderItemsArray[activeItemIndex].classList.add("current-border");

        }

    }

);

// Gestisco il click sul bottone "down"
const upBtn = document.querySelector(".up");

upBtn.addEventListener("click", 

    function() {

          // Se mi trovo alla prima slide rendo lo scorrimento continuo  
          // Se sono alla prima slide
         if (activeItemIndex === 0) {

            // Tolgo "active" dalla slide corrente
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");

            // Il valore di "activeIndex" torna a quello dell'ultima slide
            activeItemIndex = itemsArray.length - 1;

            // Aggiungo "active" alla slide precedente
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");

         } else if (activeItemIndex < (jumbotronItemsArray.length)) {

            // Tolgo "active" dalla slide corrente
            jumbotronItemsArray[activeItemIndex].classList.remove("active");
            sliderItemsArray[activeItemIndex].classList.remove("current-border");

            // Decremento il valore di "activeIndex"
            activeItemIndex--;

            // Aggiungo "active" alla slide precedente
            jumbotronItemsArray[activeItemIndex].classList.add("active");
            sliderItemsArray[activeItemIndex].classList.add("current-border");

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

        // Incremento il valore di "activeIndex"
        activeItemIndex++;

        // Aggiungo "active" alla prossima slide
        jumbotronItemsArray[activeItemIndex].classList.add("active");
        sliderItemsArray[activeItemIndex].classList.add("current-border");

      // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
      // Se sono all'ultima slide  
    } else if (activeItemIndex === jumbotronItemsArray.length - 1) {

         // Tolgo "active" dalla slide corrente
         jumbotronItemsArray[activeItemIndex].classList.remove("active");
         sliderItemsArray[activeItemIndex].classList.remove("current-border");

         // Il valore di "activeIndex" torna a quello della prima slide
         activeItemIndex = 0;

         // Aggiungo "active" alla prossima slide
         jumbotronItemsArray[activeItemIndex].classList.add("active");
         sliderItemsArray[activeItemIndex].classList.add("current-border");

    }

}