/**
 *Мета
Створити динамічний розділ "Мої проєкти", де кожен проєкт представлений у вигляді окремої "картки". Всі дані про проєкти будуть зберігатися в масиві в JavaScript, а HTML-структура буде генеруватися автоматично.
Крок 1: Оновлення HTML (index.html)
  1. Знайди секцію <section id="projects">.
  2. Видали з неї все, що знаходиться між <h2>Мої проєкти</h2> та </section>. Тобто, видали кнопку та старий параграф.
  3. Додай всередину пустий <div> з id="projects-container". Цей div буде нашим контейнером.
Повинно вийти так:
...
Крок 2: Додавання Стилів (styles.css)
Щоб наші картки виглядали гарно, додамо для них стилі.
  1. Відкрий файл styles.css.
  2. В самий кінець файлу додай наступний CSS-код:
...
Крок 3: Магія JavaScript (script.js)
Це найголовніша частина. Ми напишемо код, який візьме дані і перетворить їх на HTML.
  1. Відкрий файл script.js.
  2. Можеш видалити або закоментувати старий код (про кнопку та список навичок), щоб не заважав.
  3. Додай наступний код:
...
Після виконання всіх трьох кроків, онови свою сторінку. Ти повинен побачити гарно оформлений розділ з трьома картками проєктів. Найголовніше — тепер, щоб додати новий проєкт, тобі достатньо просто додати новий об'єкт в масив projects в JavaScript, і він автоматично з'явиться на сайті!

Успіхів!
 */

// solution
// 1. Дані про проєкти
const projects = [
  {
    title: "Сайт-портфоліо",
    technologies: ["HTML", "CSS", "JavaScript", "DOM API"],
    isCompleted: true,
    description:
      "Мій особистий сайт, який ви зараз переглядаєте. Створений для демонстрації навичок та інформації про мене.",
  },
  {
    title: "Інтернет-магазин 'TechWorld'",
    technologies: ["React", "Node.js", "PostgreSQL"],
    isCompleted: false,
    description:
      "Концепт інтернет-магазину електроніки. На даний момент у стадії планування та розробки архітектури.",
  },
  {
    title: "Застосунок для погоди",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
    isCompleted: true,
    description:
      "Простий односторінковий застосунок, що показує поточну погоду в обраному місті, використовуючи публічний API.",
  },
];
// 2. Знаходимо контейнер на сторінці
const projectsContainer = document.getElementById("projects-container");

// 3. Функція для відображення проєктів
function renderProjects() {
  // Очищуємо контейнер перед додаванням нових елементів
  projectsContainer.innerHTML = "";
  // 4. Перебираємо масив проєктів
  for (const project of projects) {
    // 5. Створюємо елементи для картки проєкту
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tech = document.createElement("p");
    tech.innerHTML = `<strong>Технології:</strong> <span class="technologies">${project.technologies.join(
      ", "
    )}</span>`;

    const status = document.createElement("p");
    const statusSpan = document.createElement("span");
    statusSpan.classList.add("status");

    if (project.isCompleted) {
      statusSpan.textContent = "Завершено";
      statusSpan.classList.add("completed");
    } else {
      statusSpan.textContent = "В розробці";
      statusSpan.classList.add("in-progress");
    }
    status.append("Статус", statusSpan);

    // 6. Додаємо всі створені елементи в картку
    card.append(title, description, tech, status);

    // 7. Додаємо готову картку в контейнер на сторінці
    projectsContainer.append(card);
  }
}

// 8. Викликаємо функцію, щоб відобразити проєкти при завантаженні сторінки
renderProjects();
