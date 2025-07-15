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
const projectsContainer = document.getElementById("projects-container");

function renderProjects() {
  const projectsHtml = projects
    .map((project) => {
      // Тут повертаємо рядок з HTML-розміткою для однієї картки
      // Використовуй зворотні лапки `` для зручності
      return `
      <div class="project-card">
        <h3>${project.title}</h3>
        <!-- ... і так далі для решти полів ... -->
        <p>Статус: <span class="status ${
          project.isCompleted ? "completed" : "in-progress"
        }">${project.isCompleted ? "Завершено" : "В розробці"}</span></p>
      </div>
    `;
    })
    .join("");
  projectsContainer.innerHTML = projectsHtml;
}

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
