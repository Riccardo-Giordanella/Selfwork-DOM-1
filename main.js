let paragrafi = document.querySelectorAll("p");
let colore = document.querySelector(".colore");
let grassetto = document.querySelector(".grassetto");
let abracadabra = document.querySelector(".abracadabra");


colore.addEventListener('click', ()=>{
    paragrafi.forEach((paragrafo)=>{
        let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        let rgb = `rgb(${r}, ${g}, ${b})`;
        paragrafo.style.color = rgb;
    })
});

grassetto.addEventListener('click', () => {
    paragrafi.forEach((paragrafo) => {
        if (paragrafo.style.fontWeight === 'bold') {
            paragrafo.style.fontWeight = 'normal';
        } else {
            paragrafo.style.fontWeight = 'bold';
        }
    });
});

abracadabra.addEventListener('click', ()=>{
    paragrafi.forEach((paragrafo) => {
        paragrafo.classList.toggle(`displaynone`)
    })
})