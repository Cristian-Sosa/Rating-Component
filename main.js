const btnsRate = document.querySelectorAll('.number-rate');

const cardRating = document.querySelector('#rating');
const cardTankYou = document.querySelector('#tankYou');

const numberRated = document.querySelector('#numberRated');

var value;

document.addEventListener('click', (e) =>{
    if (e.target.id == 'btnSubmit') {
        cambiarCard();

        numberRated.textContent = value
    }


    if (e.target.classList.contains('number-rate')) {
        deseleccionarBotones();
        e.target.classList.toggle('selected');
        value = e.target.dataset.number;
    }
});


const deseleccionarBotones = () => {
    for (const btn of btnsRate) {
        if (btn.classList.contains('selected')) {
            btn.classList.toggle('selected');
        }
    };
};

const cambiarCard = () => {
    cardRating.classList.toggle('oculto');
    cardTankYou.classList.toggle('oculto');
};