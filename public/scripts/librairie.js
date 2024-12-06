//Récupération de mes éléments //

const librairieSection = document.getElementById('librairie');
const boutonBG = document.getElementById('btnBG');

boutonBG.addEventListener('click', ()=>{
        console.log('coucou')
    librairieSection.style.backgroundImage = "url(/images/bg.png)";
})