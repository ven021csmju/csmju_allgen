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