// Ao clicar expande

imgCard = document.querySelectorAll('.img-card');

imgCard.forEach(element => {
    element.addEventListener('click', function (e) {

        imgCard.forEach(el => {
            el.classList.remove('active');
        });

        element.classList.add('active');
    })
});

  // Funcção para passar os slides ao clicar no botão

const gallery = document.getElementById('gallery');
const cards = gallery.querySelectorAll('.img-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let activeCardIndex = 0;



function setActiveCard(index) {
    cards[activeCardIndex].classList.remove('active');
    cards[index].classList.add('active');
    activeCardIndex = index;
}

function showPrevCard() {
    const index = activeCardIndex === 0 ? cards.length - 1 : activeCardIndex - 1;
    setActiveCard(index);
}

function showNextCard() {
    const index = activeCardIndex === cards.length - 1 ? 0 : activeCardIndex + 1;
    setActiveCard(index);
}

prevBtn.addEventListener('click', showPrevCard);
nextBtn.addEventListener('click', showNextCard);


