

// Этот вариант решает проблему и подсвечивает все слова оканчивающиеся на ing,
// Но возникает проблема с тем, что при перестройке DOM, мы теряем все листенеры событий от скриптов
// Однако, подойдет для простых страниц

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     document.body.innerHTML = document.body.innerHTML.replace(new RegExp("(\\b(\\w+ing)\\b)(?![^<]*?>)", 'gi'),
//         '<span style="background-color:yellow">$&</span>');
// });


// В данном случае мы целенаправленно меняем только текстовые элементы, поэтому скрипты не страдают
// По крайней мере, насколько я смог протестировать

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let textElements = document.querySelectorAll('p,a,span,h1,h2,h3');
    textElements.forEach((el) => {
        el.innerHTML = el.innerHTML.replace(new RegExp("(\\b(\\w+ing)\\b)(?![^<]*?>)", 'gi'),'<span style="background-color:yellow">$&</span>');
    });
});

