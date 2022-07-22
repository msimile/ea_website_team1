let data = null
let counter = 0;
let cardNumber = 0;

// Recupero l'API contenente le CARD
async function fetchArticleEA(){
    const response = await fetch('APIs/news.json');
    data = await response.json();
    window.dispatchEvent(dataFetch)
}

// Al caricamento della pagina vado a recuperare le card
window.addEventListener('load',fetchArticleEA);
const dataFetch = new CustomEvent('dataFetch');

// Dopo il fetch popolo la sezione Ultime Novità
window.addEventListener('dataFetch', () => {
    const cards = document.querySelectorAll(".section-news-cards-article");
    const img = document.querySelectorAll(".section-news-cards-article-image-content");
    const info = document.querySelectorAll(".section-news-cards-article-content-info-title");
    const date = document.querySelectorAll(".section-news-cards-article-content-info-date");
    const h3 = document.querySelectorAll(".section-news-cards-article-content-title-content");
    const text = document.querySelectorAll(".section-news-cards-article-content-text");
    const a = document.querySelectorAll(".link-card");
    while(counter<6){
        img[counter].src=data[counter].url;
        info[counter].textContent=data[counter].info;
        date[counter].textContent=data[counter].date;
        h3[counter].textContent=data[counter].title;
        text[counter].textContent=data[counter].content;
        a[counter].href=data[counter].link;
        counter++;
    }   
    

    //Recupero le varie sezioni
    const notizie = document.getElementById("notizie");
    const eaPlay = document.getElementById("ea-play");
    const fifa = document.getElementById("fifa");
    const f1 = document.getElementById("f1");
    const apex = document.getElementById("apex");
    const sims = document.getElementById("sims");
    const battlefield = document.getElementById("battlefield");
    const inside = document.getElementById("inside");
    const options = [notizie,eaPlay,fifa,f1,apex,sims,battlefield,inside];
    const under = document.querySelectorAll(".underline"); // Per gestire la linea rossa nel nome della sezione selezionata
    const underline = Array.from(under);

    // Questa funzione gestisce l'animazione che porta a scrollare le card verso il basso al cambio sezione
    function animationSection(){
        let id = null;
        function myMove() {
            const container = document.querySelector(".section-news-cards");
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 35);
            function frame() {
               if (pos == 15) {
                clearInterval(id);
               } else {
                
               pos++;
               container.style.transform = "translateY("+pos+"px)"; }}
               }
            myMove();
    }
 



    //Gestisco l'aggiornamento delle card per le varie sezioni
    notizie.addEventListener("click", ()=>{
        counter=0;
        card = 0;
        options.forEach(element => {element.style.backgroundColor="transparent";});
        notizie.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[0].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
       
       
        while(counter<6){
            if(window.innerWidth>768){
                cards[card].style.height="32.2rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    eaPlay.addEventListener("click", ()=>{
        counter=6;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        eaPlay.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[1].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        
        while(counter<12){
            if(window.innerWidth>768){
                cards[card].style.height="32";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })    
    fifa.addEventListener("click", ()=>{
        
        counter=12;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        fifa.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[2].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<18){
            if(window.innerWidth>768){
                cards[card].style.height="37rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    f1.addEventListener("click", ()=>{
        
        counter=18;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        f1.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[3].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<24){
            if(window.innerWidth>768){
                cards[card].style.height="30rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    apex.addEventListener("click", ()=>{
        
        counter=24;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        apex.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[4].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<30){
            if(window.innerWidth>768){
                cards[card].style.height="34.8rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    sims.addEventListener("click", ()=>{
        
        counter=30;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        sims.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[5].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<36){
            if(window.innerWidth>768){
                cards[card].style.height="30rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    battlefield.addEventListener("click", ()=>{
        
        counter=36;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        battlefield.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[6].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<42){
            if(window.innerWidth>768){
                cards[card].style.height="29.8rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
    inside.addEventListener("click", ()=>{
        
        counter=42;
        card = 0;
        options.forEach(element => {
            element.style.backgroundColor="transparent";
            element.addEventListener("mouseover", () => {element.style.backgroundColor="rgba(0, 0, 0, 0.08)"})
            element.addEventListener("mouseleave", () => {element.style.backgroundColor="transparent"})
        });
        inside.style.backgroundColor="rgba(0, 0, 0, 0.08)";
        underline.forEach(element => {element.style.border="none";});
        underline[7].style.borderBottom="2px solid rgb(255,71,71)";
        animationSection();
        while(counter<48){
            if(window.innerWidth>768){
                cards[card].style.height="32.8rem";
            }
            else{
                cards[card].style.height="max-content"
            }
            img[card].src=data[counter].url;
            info[card].textContent=data[counter].info;
            date[card].textContent=data[counter].date;
            h3[card].textContent=data[counter].title;
            text[card].textContent=data[counter].content;
            a[card].href=data[counter].link;
            counter++;
            card++;
        }

    })
});