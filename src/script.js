let ToggleMenu = false;
let hamToggle = false;

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

document.getElementById('userInfo').onclick = function () {

    ToggleMenu = !ToggleMenu;
    if (ToggleMenu === true) {
        document.getElementById('userMenu').style.display = 'block';
    } else {
        document.getElementById('userMenu').style.display = 'none';
    }

}

document.getElementById('hamBar').onclick = function () {
    hamToggle = !hamToggle;
    if (hamToggle === true) {
        document.getElementById('mobile-menu').style.display = 'block';
    } else {
        document.getElementById('mobile-menu').style.display = 'none';
    }
}

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});


document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
        tab: 0
    });

    Alpine.data('accordion', (idx) => ({
        init() {
            this.idx = idx;
        },
        idx: -1,
        handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
        },
        handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
        },
        handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
        }
    }));
})

