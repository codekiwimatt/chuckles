let hamburgerMenu = document.querySelector(".hamburger");
let spans = document.querySelectorAll(".hamburger span");
let menuList = document.querySelector(".menu-list");

hamburgerMenu.addEventListener("click", function (e) {

    if (document.querySelector(".hamburger span:nth-child(1)").classList.contains("active")
    ) {
        spans.forEach(element => {
            element.classList.remove("active");
        });
        menuList.classList.remove("active");
        console.log("if");
    } else {
        spans.forEach(element => {
            element.classList.add("active");
        });
        menuList.classList.add("active");
        console.log("else");
    }

})


