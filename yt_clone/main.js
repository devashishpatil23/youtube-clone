var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.addEventListener("click", function(){
    console.log("yes");
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
});