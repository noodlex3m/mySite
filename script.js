/**
 * Практичне Завдання: Динамічний Список Навичок
Зараз ми об'єднаємо наші знання про масиви, цикли та створення елементів DOM, щоб динамічно генерувати список твоїх навичок.

1. В index.html:

    Знайди секцію about (<section id="about">).

    Десь у логічному місці (наприклад, після абзацу про твої цілі) додай таку структуру:

        <h3>Мої ключові навички:</h3>
        <ul id="skills-list"></ul>

    Ми створили порожній список, який будемо наповнювати за допомогою JS.

2. В script.js:

    Залиш код з попереднього завдання (з кнопкою).

    Додай під ним новий код, який:

        1. Створює масив рядків з твоїми навичками, наприклад:
            const skills = ["HTML", "CSS", "JavaScript", "Git", "Аудит"];

        2. Знаходить на сторінці список <ul> за його id (skills-list) і зберігає у змінну.
        
        3. Запускає цикл for для перебору масиву skills.

        4. Всередині циклу для кожного елемента масиву:

            Створює новий елемент <li>.

            Присвоює його textContent поточній навичці з масиву.

            Додає (append) цей новий <li> до знайденого на сторінці списку <ul>.

Після виконання цього завдання, на твоїй сторінці має автоматично з'явитися заповнений список твоїх навичок. Це дуже поширена та корисна техніка!
 */

// solution
const mainButton = document.getElementById("show-info-btn");
const mainTitle = document.querySelector("h1");
mainButton.addEventListener("click", function () {
  mainTitle.textContent = "JavaScript - це потужно!";
});

// solution 2
const skills = ["HTML", "CSS", "JavaScript", "Git", "Аудит"];
const mainList = document.getElementById("skills-list");
for (let i = 0; i < skills.length; i++) {
  const skillItem = document.createElement("li");
  skillItem.textContent = skills[i];
  mainList.appendChild(skillItem);
}
