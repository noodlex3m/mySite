/**
 * Твоє Практичне Завдання: Оживимо твоє Портфоліо!
Зараз ми застосуємо все це до твоїх файлів.
1. В index.html:

    Знайди секцію projects (<section id="projects">).

    Всередині неї, після заголовка <h2>, додай кнопку:

        <button id="show-info-btn">Показати цікавий факт</button>

2. В script.js:

    Видали весь старий код (console.log(...)).

    Напиши новий JavaScript-код, який:

        1. Знаходить кнопку за її id (show-info-btn) і зберігає її у змінну.

        2. Знаходить заголовок <h1>Портфоліо Сергія</h1> (можна за тегом h1) і зберігає його у змінну.

        3. Додає до кнопки обробник події на 'click'.

        4. Всередині функції-обробника, змінює текстовий вміст (textContent) заголовка h1 на фразу "JavaScript - це потужно!".

Це твоє перше завдання з маніпуляції DOM. Воно покаже тобі, як з'єднати HTML та JavaScript для створення інтерактиву. Спробуй!
 */

// solution
const mainButton = document.getElementById("show-info-btn");
const mainTitle = document.querySelector("h1");
mainButton.addEventListener("click", function () {
  mainTitle.textContent = "JavaScript - це потужно!";
});
