const btnsRate = document.querySelectorAll('.number-rate');
const btnSubmit = document.querySelector('#btnSubmit');

const cardRating = document.querySelector('#rating');
const cardTankYou = document.querySelector('#tankYou');

const numberRated = document.querySelector('#numberRated');

var value

// console.log(btnRate);

btnsRate.forEach(btnRate => {
    btnRate.addEventListener('click', (e) => {
        // console.log('buenas');
        console.log(e.target);

        for (const btn of btnsRate) {
            if (btn.classList.contains('selected')) {
                btn.classList.toggle('selected');
            }
        
        }
        e.target.classList.toggle('selected');
        value = e.target.dataset.number;

        console.log(value);

    });
});

btnSubmit.addEventListener('click', () => {
    cardRating.classList.toggle('oculto');
    cardTankYou.classList.toggle('oculto');

    numberRated.textContent = value
});

