document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            name: "Curso de Terços",
            startDate: "15/10/2025",
            duration: "8 horas",
            price: 150.00,
            tutora: "Maria Eduarda Souza Fernandes",
            link: "curso-tercos.html"
        },
        {
            name: "Curso de Pinturas Sacras",
            startDate: "20/10/2025",
            duration: "12 horas",
            price: 250.00,
            tutora: "Maria Eduarda Souza Fernandes",
            link: "curso-pinturas.html"
        },
        {
            name: "Curso de Precificação",
            startDate: "25/10/2025",
            duration: "4 horas",
            price: 80.00,
            tutora: "Maria Eduarda Souza Fernandes",
            link: "curso-precificacao.html"
        },
        {
            name: "Curso de Personalização",
            startDate: "30/10/2025",
            duration: "6 horas",
            price: 120.00,
            tutora: "Maria Eduarda Souza Fernandes",
            link: "curso-personalizacao.html"
        }
    ];

    const courseListContainer = document.getElementById('course-list');

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.innerHTML = `
            <h2>${course.name}</h2>
            <p><strong>Início:</strong> ${course.startDate}</p>
            <p><strong>Duração:</strong> ${course.duration}</p>
            <p class="price">R$ ${course.price.toFixed(2).replace('.', ',')}</p>
            <a href="${course.link}" class="details-button">Ver Detalhes</a>
        `;

        courseListContainer.appendChild(courseCard);
    });
});