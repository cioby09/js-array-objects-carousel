// Creo l'array contenente le immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

const itemsContainer = document.querySelector(".slider-items")

// Creo il ciclo che mi permette di creare un div per ogni immagine dell'array
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;


        // Inserisco gli elementi creati nel container "slider-items"
        itemsContainer.innerHTML += sliderItem;
}

const itemsArray = document.getElementsByClassName("item");

//Fisso la prima immagine
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

// Gestisco il click sul bottone "down"
const downBtn = document.querySelector(".down");

downBtn.addEventListener("click", 

    function() {

        if (activeItemIndex < (itemsArray.length - 1)) {

            // Tolgo "active" dalla slide corrente
            itemsArray[activeItemIndex].classList.remove("active");

            // Incremento il valore di "activeIndex"
            activeItemIndex++;

            // Aggiungo "active" alla prossima slide
            itemsArray[activeItemIndex].classList.add("active");

          // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
          // Se sono all'ultima slide  
        } else if (activeItemIndex === itemsArray.length - 1) {

             // Tolgo "active" dalla slide corrente
             itemsArray[activeItemIndex].classList.remove("active");

             // Il valore di "activeIndex" torna a quello della prima slide
             activeItemIndex = 0;
 
             // Aggiungo "active" alla prossima slide
             itemsArray[activeItemIndex].classList.add("active");

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
            itemsArray[activeItemIndex].classList.remove("active");

            // Il valore di "activeIndex" torna a quello dell'ultima slide
            activeItemIndex = itemsArray.length - 1;

            // Aggiungo "active" alla slide precedente
            itemsArray[activeItemIndex].classList.add("active");

         } else if (activeItemIndex < (itemsArray.length)) {

            // Tolgo "active" dalla slide corrente
            itemsArray[activeItemIndex].classList.remove("active");

            // Decremento il valore di "activeIndex"
            activeItemIndex--;

            // Aggiungo "active" alla slide precedente
            itemsArray[activeItemIndex].classList.add("active");

         }

    }

)

// Gestisco l'autoplay del carousel

const autoplay = setInterval(nextElement, 3000);

function nextElement() {

    if (activeItemIndex < (itemsArray.length - 1)) {

        // Tolgo "active" dalla slide corrente
        itemsArray[activeItemIndex].classList.remove("active");

        // Incremento il valore di "activeIndex"
        activeItemIndex++;

        // Aggiungo "active" alla prossima slide
        itemsArray[activeItemIndex].classList.add("active");

      // Una volta arrivato all'ultima slide rendo lo scorrimento continuo  
      // Se sono all'ultima slide  
    } else if (activeItemIndex === itemsArray.length - 1) {

         // Tolgo "active" dalla slide corrente
         itemsArray[activeItemIndex].classList.remove("active");

         // Il valore di "activeIndex" torna a quello della prima slide
         activeItemIndex = 0;

         // Aggiungo "active" alla prossima slide
         itemsArray[activeItemIndex].classList.add("active");

    }

}