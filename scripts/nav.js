window.onscroll = function() {myFunction()};
function myFunction() {
    let navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " card" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" card" + "animate-top" + "white", "");
    }
}