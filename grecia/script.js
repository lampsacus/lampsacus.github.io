document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        // Edad del Bronce
        {
            date: "c. 3000 – 1450 a.C.",
            title: "Civilización Minoica",
            description: "Desarrollo en Creta. Palacios como Cnosos. Escritura Lineal A. Talasocracia.",
            period: "minoan"
        },
        {
            date: "c. 1600 – 1100 a.C.",
            title: "Civilización Micénica",
            description: "Grecia Continental. Centros como Micenas y Tirinto. Escritura Lineal B. Guerreros y comerciantes.",
            period: "mycenaean"
        },
        {
            date: "c. 1200 a.C.",
            title: "Guerra de Troya (Tradicional)",
            description: "Legendario conflicto narrado en la Ilíada, marcando el final de la era heroica micénica.",
            period: "mycenaean"
        },
        // Edad Oscura
        {
            date: "c. 1100 – 800 a.C.",
            title: "Edad Oscura",
            description: "Colapso micénico. Decadencia, migraciones. Formación de las bases para las poleis. Inicio de la cerámica geométrica.",
            period: "dark-age"
        },
        // Período Arcaico
        {
            date: "776 a.C.",
            title: "Primeros Juegos Olímpicos",
            description: "Fecha tradicional del inicio de los Juegos Olímpicos, uniendo a los griegos culturalmente.",
            period: "archaic"
        },
        {
            date: "c. 750 – 550 a.C.",
            title: "Gran Colonización Griega",
            description: "Expansión de las poleis griegas por el Mediterráneo y el Mar Negro.",
            period: "archaic"
        },
        {
            date: "594 a.C.",
            title: "Reformas de Solón en Atenas",
            description: "Sentaron las bases para la futura democracia ateniense, aliviando la tensión social.",
            period: "archaic"
        },
        {
            date: "508/507 a.C.",
            title: "Reformas de Clístenes",
            description: "Establecimiento de la democracia (demokratia) en Atenas.",
            period: "archaic"
        },
        {
            date: "490 a.C.",
            title: "Batalla de Maratón",
            description: "Victoria ateniense crucial sobre los persas en la Primera Guerra Médica.",
            period: "archaic"
        },
        // Período Clásico
        {
            date: "480 – 479 a.C.",
            title: "Segunda Guerra Médica",
            description: "Batallas de las Termópilas, Salamina y Platea. Victoria griega sobre el Imperio Persa.",
            period: "classical"
        },
        {
            date: "478/477 a.C.",
            title: "Fundación de la Liga de Delos",
            description: "Alianza de ciudades-estado griegas liderada por Atenas, inicialmente contra Persia.",
            period: "classical"
        },
        {
            date: "c. 461 – 429 a.C.",
            title: "Siglo de Pericles",
            description: "Apogeo de Atenas: democracia, filosofía (Sócrates), teatro (Sófocles), Partenón.",
            period: "classical"
        },
        {
            date: "431 – 404 a.C.",
            title: "Guerra del Peloponeso",
            description: "Conflicto devastador entre Atenas y Esparta que reconfiguró el mundo griego.",
            period: "classical"
        },
        {
            date: "399 a.C.",
            title: "Muerte de Sócrates",
            description: "El filósofo ateniense es condenado a muerte, un evento crucial en la historia del pensamiento occidental.",
            period: "classical"
        },
        {
            date: "338 a.C.",
            title: "Batalla de Queronea",
            description: "Filipo II de Macedonia derrota a las ciudades-estado griegas, estableciendo la hegemonía macedonia.",
            period: "classical"
        },
        {
            date: "336 a.C.",
            title: "Ascenso de Alejandro Magno",
            description: "Tras el asesinato de Filipo II, su hijo Alejandro hereda el trono de Macedonia.",
            period: "classical"
        },
        // Período Helenístico (Inicio)
        {
            date: "334 – 323 a.C.",
            title: "Conquistas de Alejandro Magno",
            description: "Alejandro expande el imperio macedonio desde Grecia hasta la India, difundiendo la cultura griega.",
            period: "hellenistic"
        },
        {
            date: "323 a.C.",
            title: "Muerte de Alejandro Magno",
            description: "Su muerte en Babilonia marca el fin del Período Clásico y el inicio del Período Helenístico y las Guerras de los Diádocos.",
            period: "hellenistic"
        }
    ];

    const timelineContainer = document.getElementById('timelineContainer');

    timelineData.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        
        // Alternar lados
        if (index % 2 === 0) {
            eventElement.classList.add('left');
        } else {
            eventElement.classList.add('right');
        }

        // Añadir clase de periodo para el color del círculo y borde
        eventElement.classList.add(event.period);

        eventElement.innerHTML = `
            <div class="event-content">
                <div class="date">${event.date}</div>
                <h2>${event.title}</h2>
                <p>${event.description}</p>
            </div>
        `;
        timelineContainer.appendChild(eventElement);
    });

    // Animación al hacer scroll
    const events = document.querySelectorAll('.timeline-event');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para que la animación solo ocurra una vez
            }
        });
    }, { threshold: 0.1 }); // El 10% del elemento debe ser visible

    events.forEach(event => {
        observer.observe(event);
    });
});