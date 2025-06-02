// --- DATOS DE LA LÍNEA DE TIEMPO ---
const timelineItemsData = [
    // Cabecera de Periodo
    { type: 'period-header', name: 'Edad del Bronce', dates: 'c. 3000 – c. 1100 a.C.', periodClass: 'minoan' },
    {
        type: 'event', date: "c. 3000 – 1450 a.C.", title: "Civilización Minoica",
        description: "Desarrollo en Creta. Palacios como Cnosos. Escritura Lineal A. Talasocracia (dominio marítimo). Famosos por sus frescos y cerámica.",
        period: "minoan"
    },
    {
        type: 'event', date: "c. 1600 – 1100 a.C.", title: "Civilización Micénica",
        description: "Grecia Continental. Centros fortificados como Micenas y Tirinto. Guerreros y comerciantes. Escritura Lineal B (griego temprano). Máscara de Agamenón.",
        period: "mycenaean"
    },
    {
        type: 'event', date: "c. 1250 – 1200 a.C.", title: "Guerra de Troya (Tradicional)",
        description: "Legendario conflicto entre aqueos (micénicos) y troyanos, narrado en la Ilíada de Homero. Simboliza el final de la era heroica.",
        period: "mycenaean"
    },
    // Cabecera de Periodo
    { type: 'period-header', name: 'Edad Oscura Griega', dates: 'c. 1100 – c. 800 a.C.', periodClass: 'dark-age' },
    {
        type: 'event', date: "c. 1100 – 800 a.C.", title: "Colapso y Transición",
        description: "Colapso de la civilización micénica. Decadencia demográfica y cultural, pérdida de la escritura. Migraciones griegas a Asia Menor. Desarrollo de la cerámica protogeométrica y geométrica. Formación de las primeras poleis (ciudades-estado).",
        period: "dark-age"
    },
    // Cabecera de Periodo
    { type: 'period-header', name: 'Período Arcaico', dates: 'c. 800 – c. 480 a.C.', periodClass: 'archaic' },
    {
        type: 'event', date: "776 a.C.", title: "Primeros Juegos Olímpicos",
        description: "Fecha tradicional del inicio de los Juegos Olímpicos en Olimpia, un evento panhelénico que fomentaba la unidad cultural griega.",
        period: "archaic"
    },
    {
        type: 'event', date: "c. 800 - 700 a.C.", title: "Adopción del Alfabeto",
        description: "Los griegos adaptan el alfabeto fenicio, añadiendo vocales. Esto facilita la escritura y la difusión del conocimiento. Composición oral de la Ilíada y la Odisea (Homero).",
        period: "archaic"
    },
    {
        type: 'event', date: "c. 750 – 550 a.C.", title: "Gran Colonización Griega",
        description: "Expansión de las poleis por el Mediterráneo y el Mar Negro (Magna Grecia, Sicilia, costas de Francia, España, norte de África). Fundación de nuevas ciudades.",
        period: "archaic"
    },
    {
        type: 'event', date: "594 a.C.", title: "Reformas de Solón en Atenas",
        description: "Legislador ateniense que introdujo reformas para aliviar la crisis social y económica, sentando bases para la democracia (e.g., abolición de la esclavitud por deudas).",
        period: "archaic"
    },
    {
        type: 'event', date: "508/507 a.C.", title: "Reformas de Clístenes",
        description: "Considerado el fundador de la democracia ateniense (demokratia). Reorganizó la ciudadanía y el consejo (Boulé).",
        period: "archaic"
    },
    {
        type: 'event', date: "499 – 494 a.C.", title: "Revuelta Jónica",
        description: "Ciudades griegas de Jonia (Asia Menor) se rebelan contra el dominio persa, con apoyo limitado de Atenas y Eretria. Fracasa pero desencadena las Guerras Médicas.",
        period: "archaic"
    },
    {
        type: 'event', date: "490 a.C.", title: "Primera Guerra Médica: Maratón",
        description: "Victoria ateniense decisiva sobre la expedición persa de Darío I en la Batalla de Maratón.",
        period: "archaic"
    },
    // Cabecera de Periodo
    { type: 'period-header', name: 'Período Clásico', dates: 'c. 480 – 323 a.C.', periodClass: 'classical' },
     {
        type: 'event', date: "480 – 479 a.C.", title: "Segunda Guerra Médica",
        description: "Invasión persa de Jerjes I. Batallas clave: Termópilas (derrota heroica espartana), Artemisio (naval), Salamina (victoria naval griega decisiva), Platea (victoria terrestre griega).",
        period: "classical"
    },
    {
        type: 'event', date: "478/477 a.C.", title: "Fundación de la Liga de Delos",
        description: "Alianza de ciudades-estado griegas, liderada por Atenas, para continuar la lucha contra Persia y liberar las ciudades jonias. Se transforma gradualmente en un imperio ateniense.",
        period: "classical"
    },
    {
        type: 'event', date: "c. 461 – 429 a.C.", title: "Siglo de Pericles en Atenas",
        description: "Apogeo de la democracia ateniense bajo el liderazgo de Pericles. Florecimiento de la filosofía (Sócrates), el teatro (Esquilo, Sófocles, Eurípides), la historia (Heródoto, Tucídides) y las artes (Partenón, Fidias).",
        period: "classical"
    },
    {
        type: 'event', date: "431 – 404 a.C.", title: "Guerra del Peloponeso",
        description: "Devastador conflicto entre Atenas y su imperio (Liga de Delos) contra Esparta y sus aliados (Liga del Peloponeso). Termina con la derrota de Atenas.",
        period: "classical"
    },
    {
        type: 'event', date: "399 a.C.", title: "Muerte de Sócrates",
        description: "El influyente filósofo ateniense es condenado a muerte por impiedad y corromper a la juventud. Su juicio y muerte son eventos cruciales en la historia del pensamiento.",
        period: "classical"
    },
    {
        type: 'event', date: "338 a.C.", title: "Batalla de Queronea",
        description: "Filipo II de Macedonia derrota a una coalición de ciudades-estado griegas (principalmente Atenas y Tebas), estableciendo la hegemonía macedonia sobre Grecia. Formación de la Liga de Corinto.",
        period: "classical"
    },
    {
        type: 'event', date: "336 a.C.", title: "Ascenso de Alejandro Magno",
        description: "Tras el asesinato de su padre Filipo II, Alejandro hereda el trono de Macedonia y los planes para invadir el Imperio Persa.",
        period: "classical"
    },
    // Cabecera de Periodo
    { type: 'period-header', name: 'Período Helenístico', dates: '323 – 31 a.C.', periodClass: 'hellenistic' },
    {
        type: 'event', date: "334 – 323 a.C.", title: "Conquistas de Alejandro Magno",
        description: "Alejandro lidera al ejército greco-macedonio en una serie de victorias que destruyen el Imperio Persa y extienden su propio imperio desde Grecia hasta la India, difundiendo la cultura griega (helenización).",
        period: "hellenistic"
    },
    {
        type: 'event', date: "323 a.C.", title: "Muerte de Alejandro Magno",
        description: "Alejandro muere en Babilonia sin un heredero claro. Su vasto imperio se fragmenta entre sus generales (los Diádocos), dando inicio al Período Helenístico y a décadas de guerras de sucesión.",
        period: "hellenistic"
    },
    {
        type: 'event', date: "323 – c. 281 a.C.", title: "Guerras de los Diádocos",
        description: "Los generales de Alejandro (Ptolomeo, Seleuco, Antígono, Lisímaco, etc.) luchan por el control de su imperio, resultando en la formación de los grandes reinos helenísticos: Ptolemaico (Egipto), Seléucida (Asia), Antigónida (Macedonia).",
        period: "hellenistic"
    }
];

// --- LÓGICA DE LA LÍNEA DE TIEMPO ---
document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.getElementById('timelineContainer');
    const currentYearSpan = document.getElementById('currentYear');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mapeo de periodos a clases de Tailwind para los bordes y puntos
    const periodColors = {
        minoan: 'border-sky-500',
        mycenaean: 'border-blue-400',
        'dark-age': 'border-slate-400',
        archaic: 'border-yellow-400',
        classical: 'border-green-400',
        hellenistic: 'border-violet-400'
    };
    const periodTextColors = { // Para el texto de la fecha/título si se desea diferenciar más
        minoan: 'text-sky-600',
        mycenaean: 'text-blue-500',
        'dark-age': 'text-slate-600',
        archaic: 'text-yellow-600',
        classical: 'text-green-600',
        hellenistic: 'text-violet-600'
    };

    // --- GENERACIÓN DINÁMICA DE LA LÍNEA DE TIEMPO ---
    if (timelineContainer) {
        timelineItemsData.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('timeline-item', 'mb-8', 'relative');

            const side = index % 2 === 0 ? 'left' : 'right';
            itemElement.classList.add(side);

            const itemPeriodClass = item.period || item.periodClass;
            const borderColorClass = periodColors[itemPeriodClass] || 'border-gray-400';
            const textColorClass = periodTextColors[itemPeriodClass] || 'text-gray-700';

            itemElement.classList.add(`period-${itemPeriodClass}`);

            if (item.type === 'period-header') {
                itemElement.classList.add('w-full', 'md:w-3/4', 'mx-auto', 'period-header');
                 if (side === 'left') {
                    itemElement.classList.add('md:mr-auto', 'md:ml-0');
                } else {
                    itemElement.classList.add('md:ml-auto', 'md:mr-0');
                }
                itemElement.innerHTML = `
                    <div class="period-header-content bg-white p-4 rounded-lg shadow-lg ${borderColorClass} ${side === 'left' ? 'border-r-4 md:border-r-0 md:border-l-4' : 'border-l-4'} text-center md:text-left">
                        <h2 class="text-2xl md:text-3xl font-bold ${textColorClass} mb-1">${item.name}</h2>
                        <p class="text-slate-500 text-sm md:text-base">${item.dates.replace(/–/g, '-')}</p>
                    </div>
                `;
            } else { // Es un evento
                itemElement.classList.add('w-full', 'md:w-1/2');
                if (side === 'left') {
                    itemElement.classList.add('md:pr-8', 'text-left', 'md:text-right');
                } else {
                    itemElement.classList.add('md:ml-auto', 'md:pl-8', 'text-left');
                }
                itemElement.innerHTML = `
                    <div class="event-content bg-white p-6 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl ${borderColorClass} ${side === 'left' ? 'border-r-4 md:border-r-4' : 'border-l-4 md:border-l-4'}">
                        <p class="text-sm font-semibold ${textColorClass} mb-1">${item.date.replace(/–/g, '-')}</p>
                        <h2 class="text-xl md:text-2xl font-bold text-slate-700 mb-2">${item.title}</h2>
                        <p class="text-slate-600 text-sm md:text-base">${item.description}</p>
                    </div>
                `;
            }
            timelineContainer.appendChild(itemElement);
        });

        // Intersection Observer para animaciones al hacer scroll
        const observerItems = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        observerItems.forEach(obsItem => {
            if (obsItem) observer.observe(obsItem);
        });
    }
});