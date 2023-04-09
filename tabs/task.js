let links = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".tab__content")

for (let i=0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        document.querySelector(".tab.tab_active").className = "tab";
        document.querySelector(".tab__content.tab__content_active").className = "tab__content";
        links[i].className += " tab_active";
        contents[i].className += " tab__content_active";
    });
};