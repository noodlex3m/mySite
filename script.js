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
    status.append("Статус: ", statusSpan);

    // 6. Додаємо всі створені елементи в картку
    card.append(title, description, tech, status);

    // 7. Додаємо готову картку в контейнер на сторінці
    projectsContainer.append(card);
  }
}

// 8. Викликаємо функцію, щоб відобразити проєкти при завантаженні сторінки
renderProjects();

// Віджет погоди
async function getWeather() {
  const weatherWidget = document.getElementById("weather-widget");
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=48.29&longitude=25.94&current_weather=true";

  try {
    // 1. Робимо запит до API
    const response = await fetch(url);

    // 2. Перетворюємо відповідь у формат JSON
    const data = await response.json();

    // 3. Отримуємо температуру
    const temperature = data.current_weather.temperature;

    // 4. Відображаємо на сторінці
    weatherWidget.innerHTML = `Температура зараз: <strong>${temperature}°C</strong>`;
  } catch (error) {
    weatherWidget.innerHTML = "Не вдалося завантажити дані про погоду.";
    console.error("Помилка при отриманні погоди:", error);
  }
}

// Викликаємо функцію для отримання погоди
getWeather();
