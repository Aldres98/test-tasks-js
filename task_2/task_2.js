'use strict';

let initialTextHtml = document.getElementById("random-eng-text");
let emptyPar = document.getElementById("empty-par");

function copyText() {
    initialTextHtml.innerHTML.split(' ').forEach((el) => {
        if(el.toLowerCase().charAt(0) === "r") {
            el = `<span style="color: red"> ${el.split("").reverse().join("")} </span>`;
            emptyPar.innerHTML += el + " "
        } else if(el.toLowerCase().charAt(0) !== "r") {
            emptyPar.innerHTML += el + " "
        }
    });
}

// В целом, того же самого можно достичь с помощью регулярки (вроде ^r\W), и наверное так даже правильнее
// Но я достаточно использовал регулярок в других задачах, поэтому думаю вам будет интереснее посмотреть на мое умение
// Пользоваться и некоторыми другими инструментами :)


