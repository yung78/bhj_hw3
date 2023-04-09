let list = document.querySelector(".dropdown__list");
let items = document.querySelectorAll(".dropdown__list");
let links = document.querySelectorAll(".dropdown__link");
let value = document.querySelector(".dropdown__value");

function menuOnClick() {
    if (list.className == "dropdown__list") {
    list.className += " dropdown__list_active";
    } else {list.className = "dropdown__list"};
};

function linkOnClick(index) {
    value.innerHTML = links[index].innerHTML;
    list.className = "dropdown__list";
};

value.addEventListener("click", menuOnClick);

for (let i=0; i < links.length; i++) {
    links[i].onclick = (() => { // Не совсем понятно, почему внутри стрелочной функции индекс сохраняется,
        linkOnClick(i);        // а в конструкции links[i].onclick = linkOnClick(i) цикл проходит до конца,
        return false;          // и получаем индекс последней итерации?
    });
};