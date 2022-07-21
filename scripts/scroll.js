// Recupero i bottoni di scroll e la sezione da scrollare
const button = document.querySelector("#more-options");
const button1 = document.querySelector("#more-options1");
const options = document.querySelector(".section-news-options-container");

// Faccio sempre un check sulla misura dello schermo per mostrare i bottoni
window.addEventListener("resize", ()=> {
    if (window.innerWidth>800){
        button1.style.visibility="hidden"
    }
    if(window.innerWidth>783){
        button.style.visibility="hidden"
    }
    if(window.innerWidth<800){
        button1.style.visibility="visible"
    }
})


// Gestisco lo scorrimento verso destra con button1
let prevValue=screen.width;
let value = 0;
button1.addEventListener("click", ()=>{
    if(value==0){
        value = screen.width-50;
    } else if(screen.width == prevValue){
        value = value+220;
    }
    else{
        value=screen.width;
    }
    
    options.scrollTo({ left: value, behavior: 'smooth' });
    button.style.visibility="visible";
    
    if ((value>390 && screen.width>390) || value>500){
        button1.style.visibility="hidden"
    }
    prevValue = screen.width;
})

// Gestisco lo scorrimento verso sinistra con button
let value1 = 0;
button.addEventListener("click", ()=>{
    value=0;
    options.scrollTo({ left: -screen.width, behavior: 'smooth' });
    button.style.visibility="hidden"
    button1.style.visibility="visible";
})