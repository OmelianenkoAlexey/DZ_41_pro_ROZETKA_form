// ! ДЗ 38. Реалізувати подобу інтернет - магазину.

//     Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться
// список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення,
// що товар куплений і повернення у вихідний стан програми
// (коли відображається лише список категорій).

// ! ДЗ 41. Модифікувати програму інтернет - магазин

// Робимо на підставі минулого дз.


// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час
// підтвердження замовлення - обов'язкові поля заповнені.
// Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку
// (інформація про товар та про доставку)

const categories = [
    {
        name: "iphone",
        image: "images/iphone.png",
    },
    {
        name: "notebook",
        image: "images/mac.png",
    },
    {
        name: "watch",
        image: "images/watch.png",
    },
];

const products = [
    {
        category: "iphone",
        name: "iphone1",
        image: "images/iphone1.jpg",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "iphone",
        name: "iphone2",
        image: "images/iphone2.jpg",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "iphone",
        name: "iphone3",
        image: "images/iphone3.jpg",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "notebook",
        name: "notebook1",
        image: "images/notebook1.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "notebook",
        name: "notebook2",
        image: "images/notebook2.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "notebook",
        name: "notebook3",
        image: "images/notebook3.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "watch",
        name: "watch1",
        image: "images/watch1.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "watch",
        name: "watch2",
        image: "images/watch2.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
    {
        category: "watch",
        name: "watch3",
        image: "images/watch3.png",
        display: "3.5, сенсорный, 480x320, емкостный, TFT, 16 млн.",
        cpu: "412 Мгц, граф.процессор",
        memory: "8 Гб, 128 Мб RAM",
        battery: "1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки",
    },
];

const container = document.createElement("div");
container.classList.add("container");

const left = document.createElement("div");
left.classList.add("left");

container.append(left);
document.body.append(container);

function renderCategories(arr1) {

    arr1.forEach(item => {
        const leftItem = document.createElement("div");
        leftItem.classList.add("left-item");

        const leftImage = document.createElement("img");
        leftImage.classList.add("left-image");
        leftImage.setAttribute("src", `${item.image}`);
        leftImage.setAttribute("alt", `${item.name}`);

        leftItem.append(leftImage);
        left.append(leftItem);

        leftImage.addEventListener("click", e => {
            renderProducts(products, item.name);
        })
    })
}
renderCategories(categories);

function renderProducts(arr1, nameCategory) {

    const deleteRight = document.querySelector(".right");
    if (deleteRight) deleteRight.remove();

    const deleteMain = document.querySelector(".main");
    if (deleteMain) deleteMain.remove();

    const main = document.createElement("div");
    main.classList.add("main");
    const mainItem = document.createElement("div");
    mainItem.classList.add("main-item");

    arr1.forEach(item => {
        if (item.category === nameCategory) {

            const mainBox = document.createElement("div");
            mainBox.classList.add("main-box");

            const mainTitle = document.createElement("div");
            mainTitle.classList.add("main-title");
            mainTitle.innerText = `${item.name}`;

            const mainImage = document.createElement("img");
            mainImage.classList.add("main-image");
            mainImage.setAttribute("src", `${item.image}`);
            mainImage.setAttribute("alt", `${item.name}`);

            mainBox.append(mainTitle);
            mainBox.append(mainImage);
            mainItem.append(mainBox);

            mainImage.addEventListener("click", e => {

                renderInfoProducts(products, item.name)

            })
        }
    })
    main.append(mainItem);
    container.append(main);
};

function renderInfoProducts(arr1, nameProduct) {

    const deleteRight = document.querySelector(".right");
    if (deleteRight) deleteRight.remove();

    const right = document.createElement("div");
    right.classList.add("right");
    infoOff = right;

    arr1.forEach(item => {
        if (item.name === nameProduct) {

            const rightItem = document.createElement("div");
            rightItem.classList.add("right-item");

            const rightTitle = document.createElement("p");
            rightTitle.innerText = `${item.name}`;

            const rightImage = document.createElement("img");
            rightImage.classList.add("right-image");
            rightImage.setAttribute("src", `${item.image}`);
            rightImage.setAttribute("alt", `${item.name}`);

            const rightInfoDisplay = document.createElement("p");
            rightInfoDisplay.innerText = `${item.display}`;
            const rightInfoCpu = document.createElement("p");
            rightInfoCpu.innerText = `${item.cpu}`;
            const rightInfoMemory = document.createElement("p");
            rightInfoMemory.innerText = `${item.memory}`;
            const rightInfoBattery = document.createElement("p");
            rightInfoBattery.innerText = `${item.battery}`;

            const button = document.createElement("button");
            button.classList.add("button");
            button.innerText = "Купить";

            rightItem.append(rightTitle);
            rightItem.append(rightImage);
            rightItem.append(rightInfoDisplay);
            rightItem.append(rightInfoCpu);
            rightItem.append(rightInfoMemory);
            rightItem.append(rightInfoBattery);
            rightItem.append(button);

            right.append(rightItem);

            button.addEventListener("click", e => {

                // !!!!!!!!!!!!




                const modalContainer1 = document.querySelector(".modal-container1");
                const modalContainer2 = document.querySelector(".modal-container2");

                let fullName = document.getElementById("fullName");
                let city = document.getElementById("city");
                let mailNumber = document.getElementById("mailNumber");

                let paymentType = document.getElementById("paymentType");
                let after = document.getElementById("after");
                let before = document.getElementById("before");

                let productionQuantity = document.getElementById("productionQuantity");

                const add = document.getElementById("add");
                const close = document.getElementById("close");

                const close2 = document.getElementById("close2");

                let fullNameForm = document.getElementById("fullNameForm");
                let nameProductForm = document.getElementById("nameProductForm");
                let productionQuantityForm = document.getElementById("productionQuantityForm");
                let cityForm = document.getElementById("cityForm");
                let mailNumberForm = document.getElementById("mailNumberForm");
                let imageForm = document.getElementById("imageForm");
                imageForm.setAttribute("src", `${item.image}`);

                modalContainer1.classList.remove("d-none");

                close.addEventListener("click", e => {
                    modalContainer1.classList.add("d-none");
                });

                add.addEventListener("click", e => {
                    e.preventDefault();
                    const start = [false, false, false, false];
                    if (!fullName.value) {
                        fullName.style.backgroundColor = "red";
                        start[0] = false;
                    } else {
                        fullName.style.backgroundColor = "white";
                        start[0] = true;
                    }

                    if (!city.value) {
                        city.style.backgroundColor = "red";
                        start[1] = false;
                    } else {
                        city.style.backgroundColor = "white";
                        start[1] = true;
                    }

                    if (!mailNumber.value) {
                        mailNumber.style.backgroundColor = "red";
                        start[2] = false;
                    } else {
                        mailNumber.style.backgroundColor = "white";
                        start[2] = true;
                    }

                    if (!paymentType.value) {
                        // paymentType.style.backgroundColor = "red";
                    } else {
                        // paymentType.style.backgroundColor = "white";
                    }

                    // if (after.checked) paymentType = after.value;
                    // if (before.checked) paymentType = before.value;

                    if (!productionQuantity.value) {
                        productionQuantity.style.backgroundColor = "red";
                        start[3] = false;
                    } else {
                        productionQuantity.style.backgroundColor = "white";
                        start[3] = true;
                    }

                    function validation() {
                        return start.every((item) => item);
                    }

                    if (validation()) {



                        fullNameForm.innerText = fullName.value;
                        nameProductForm.innerText = nameProduct;
                        productionQuantityForm.innerText = productionQuantity.value;
                        cityForm.innerText = city.value;
                        mailNumberForm.innerText = mailNumber.value;

                        modalContainer1.classList.add("d-none");
                        modalContainer2.classList.remove("d-none");
                    }
                })

                close2.addEventListener("click", e => {
                    modalContainer2.classList.add("d-none");
                })
                // !!!!!!!!!!!!!!
            })
        }
        container.append(right);
    })
};


// ! ДЗ 41. Модифікувати програму інтернет - магазин

// Робимо на підставі минулого дз.


// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто(вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час
// підтвердження замовлення - обов'язкові поля заповнені.
// Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку
// (інформація про товар та про доставку)

