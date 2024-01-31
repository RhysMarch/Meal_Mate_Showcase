document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var sidebar = document.getElementById("mySidebar");
        var main = document.getElementById("main");
        sidebar.style.width = '0';
        main.classList.remove("sidebar-open");

        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        const fixedHeaderHeight = document.querySelector('.title-container').clientHeight;
        const additionalOffset = 100; // This value makes it scroll to the top, plus a bit more

        window.scroll({
            top: offsetTop - fixedHeaderHeight - additionalOffset,
            behavior: "smooth"
        });
    });
});


function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");

    if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
        main.classList.remove("sidebar-open");
    } else {
        sidebar.style.width = '200px';
        main.classList.add("sidebar-open");
    }
}
