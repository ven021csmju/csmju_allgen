let ToggleMenu = false;
let hamToggle = false;
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