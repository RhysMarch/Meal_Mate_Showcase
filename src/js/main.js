document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.menu.btn14');
    menuButton.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});