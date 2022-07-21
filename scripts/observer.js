const body = document.querySelector("body");
const cards = document.querySelectorAll(".section-news-cards-article");
const observer = new ResizeObserver ( (entries) => {
    if(window.innerWidth<768){
        for(let i=0; i<6; i++){
            cards[i].removeAttribute("style");
        }
    }
})
observer.observe(body);