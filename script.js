document.addEventListener("DOMContentLoaded", () => {

    // ЗАВДАННЯ 1: Зміна кольорів для 5-го та 6-го елементів
    // (134 mod 10) + 1 = 5
       // Елемент №5: ul (вибірка за допомогою getElementById)
    const elem5 = document.getElementById("element-5");
    let isElem5Toggled = false;

    if (elem5) {
        elem5.addEventListener("click", () => {
            if (!isElem5Toggled) {
                elem5.style.backgroundColor = "#048f8f";
                elem5.style.color = "#ffffff";
            } else {
                elem5.style.backgroundColor = "";
                elem5.style.color = "";
            }
            isElem5Toggled = !isElem5Toggled;
        });
    }
    // Елемент №6: h3 (вибірка за допомогою querySelector)
    const elem6 = document.querySelector(".element-6");
    let isElem6Toggled = false;
    if (elem6) {
        elem6.addEventListener("click", () => {
            if (!isElem6Toggled) {
                elem6.style.backgroundColor = "#e67e22";
                elem6.style.color = "#ffffff";
            } else {
                elem6.style.backgroundColor = "";
                elem6.style.color = "";
            }
            isElem6Toggled = !isElem6Toggled;
        });
    }
    // ЗАВДАННЯ 2:  керування зображенням
    const imgContainer = document.getElementById("img-container");
    const btnAdd = document.getElementById("btn-add");
    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnDelete = document.getElementById("btn-delete");
    const INITIAL_WIDTH = 600;
    const STEP = 60;
    const MIN_WIDTH = 150;
    const MAX_WIDTH = 850;
    function getImg() {
        return document.getElementById("edinburgh-img");
    }
    // 1. Додати зображення (якщо вилучене)
    btnAdd.addEventListener("click", () => {
        if (!getImg()) {
            const newLink = document.createElement("a");
            newLink.href = "https://www.edinburgh.gov.uk";
            newLink.target = "_blank";
            newLink.rel = "noopener noreferrer";
            newLink.title = "Перейти на офіційний сайт Единбурга";
            newLink.id = "img-link";
            const newImg = document.createElement("img");
            newImg.id = "edinburgh-img";
            newImg.src = "bywv9cc1lftjrd6yhdez.jpg";
            newImg.alt = "Панорамний вигляд міста Единбург з готичною архітектурою";
            newImg.width = INITIAL_WIDTH;
            newLink.appendChild(newImg);
            imgContainer.appendChild(newLink);
        }
    });
    // 2. Збільшити
    btnIncrease.addEventListener("click", () => {
        const img = getImg();
        if (img) {
            let currentWidth = img.width || INITIAL_WIDTH;
            if (currentWidth + STEP <= MAX_WIDTH) {
                img.width = currentWidth + STEP;
            }
        }
    });
    // 3. Зменшити
    btnDecrease.addEventListener("click", () => {
        const img = getImg();
        if (img) {
            let currentWidth = img.width || INITIAL_WIDTH;
            if (currentWidth - STEP >= MIN_WIDTH) {
                img.width = currentWidth - STEP;
            }
        }
    });
    // 4. Видалити
    btnDelete.addEventListener("click", () => {
        const imgLink = document.getElementById("img-link");
        if (imgLink) {
            imgLink.remove();
        }
    });
});