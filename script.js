document.addEventListener('DOMContentLoaded', function () {
            
    const nightHoursData = [
        { nights: 1, hours: 1529 }, { nights: 2, hours: 1525 }, { nights: 3, hours: 1528 },
        { nights: 4, hours: 1524 }, { nights: 5, hours: 1527 }, { nights: 6, hours: 1523 },
        { nights: 7, hours: 1526 }, { nights: 8, hours: 1522 }, { nights: 9, hours: 1525 },
        { nights: 10, hours: 1521 }, { nights: 11, hours: 1517 }, { nights: 12, hours: 1520 },
        { nights: 13, hours: 1516 }, { nights: 14, hours: 1519 }, { nights: 15, hours: 1515 },
        { nights: 16, hours: 1518 }, { nights: 17, hours: 1514 }, { nights: 18, hours: 1517 },
        { nights: 19, hours: 1513 }, { nights: 20, hours: 1516 }, { nights: 21, hours: 1512 },
        { nights: 22, hours: 1508 }, { nights: 23, hours: 1511 }, { nights: 24, hours: 1507 },
        { nights: 25, hours: 1510 }, { nights: 26, hours: 1506 }, { nights: 27, hours: 1509 },
        { nights: 28, hours: 1505 }, { nights: 29, hours: 1508 }, { nights: 30, hours: 1504 },
        { nights: 31, hours: 1507 }, { nights: 32, hours: 1503 }, { nights: 33, hours: 1499 },
        { nights: 34, hours: 1502 }, { nights: 35, hours: 1498 }, { nights: 36, hours: 1501 },
        { nights: 37, hours: 1497 }, { nights: 38, hours: 1500 }, { nights: 39, hours: 1496 },
        { nights: 40, hours: 1499 }, { nights: 41, hours: 1495 }, { nights: 42, hours: 1498 },
        { nights: 43, hours: 1494 }, { nights: 44, hours: 1490 }, { nights: 45, hours: 1493 },
        { nights: 46, hours: 1489 }, { nights: 47, hours: 1492 }, { nights: 48, hours: 1488 },
        { nights: 49, hours: 1491 }, { nights: 50, hours: 1487 }, { nights: 51, hours: 1490 },
        { nights: 52, hours: 1486 }, { nights: 53, hours: 1489 }, { nights: 54, hours: 1485 },
        { nights: 55, hours: 1488 }, { nights: 56, hours: 1484 }, { nights: 57, hours: 1480 },
        { nights: 58, hours: 1483 }, { nights: 59, hours: 1479 }, { nights: 60, hours: 1482 },
        { nights: 61, hours: 1478 }, { nights: 62, hours: 1481 }, { nights: 63, hours: 1477 },
        { nights: 64, hours: 1480 }, { nights: 65, hours: 1476 }, { nights: 66, hours: 1479 },
        { nights: 67, hours: 1475 }, { nights: 68, hours: 1478 }, { nights: 69, hours: 1474 },
        { nights: 70, hours: 1477 }, { nights: 71, hours: 1473 }, { nights: 72, hours: 1469 },
        { nights: 73, hours: 1472 }, { nights: 74, hours: 1468 }, { nights: 75, hours: 1471 },
        { nights: 76, hours: 1467 }, { nights: 77, hours: 1470 }, { nights: 78, hours: 1466 },
        { nights: 79, hours: 1469 }, { nights: 80, hours: 1465 }, { nights: 81, hours: 1468 },
        { nights: 82, hours: 1464 }, { nights: 83, hours: 1467 }, { nights: 84, hours: 1463 },
        { nights: 85, hours: 1466 }, { nights: 86, hours: 1462 }, { nights: 87, hours: 1458 },
        { nights: 88, hours: 1461 }, { nights: 89, hours: 1457 }, { nights: 90, hours: 1460 },
        { nights: 91, hours: 1456 }, { nights: 92, hours: 1459 }, { nights: 93, hours: 1455 },
        { nights: 94, hours: 1458 }, { nights: 95, hours: 1454 }, { nights: 96, hours: 1457 },
        { nights: 97, hours: 1453 }, { nights: 98, hours: 1456 }, { nights: 99, hours: 1452 },
        { nights: 100, hours: 1448 }, { nights: 101, hours: 1451 }, { nights: 102, hours: 1447 },
        { nights: 103, hours: 1450 }, { nights: 104, hours: 1446 }, { nights: 105, hours: 1449 },
        { nights: 106, hours: 1445 }, { nights: 107, hours: 1448 }, { nights: 108, hours: 1444 },
        { nights: 109, hours: 1447 }, { nights: 110, hours: 1443 }, { nights: 111, hours: 1446 },
        { nights: 112, hours: 1442 }, { nights: 113, hours: 1445 }, { nights: 114, hours: 1441 },
        { nights: 115, hours: 1437 }, { nights: 116, hours: 1440 }, { nights: 117, hours: 1436 },
        { nights: 118, hours: 1439 }, { nights: 119, hours: 1435 }, { nights: 120, hours: 1438 },
        { nights: 121, hours: 1434 }, { nights: 122, hours: 1437 }, { nights: 123, hours: 1433 },
        { nights: 124, hours: 1436 }, { nights: 125, hours: 1432 }, { nights: 126, hours: 1435 },
        { nights: 127, hours: 1431 }, { nights: 128, hours: 1434 }, { nights: 129, hours: 1430 },
        { nights: 130, hours: 1426 }, { nights: 131, hours: 1429 }, { nights: 132, hours: 1425 },
        { nights: 133, hours: 1428 }, { nights: 134, hours: 1424 }, { nights: 135, hours: 1427 },
        { nights: 136, hours: 1423 }, { nights: 137, hours: 1426 }, { nights: 138, hours: 1422 },
        { nights: 139, hours: 1425 }, { nights: 140, hours: 1421 }, { nights: 141, hours: 1424 },
        { nights: 142, hours: 1420 }
    ];

    const data = {
        shifts: [
            { code: 'MAN', name: 'Mañanas (7h)', description: 'Turno de mañana estándar de 7 horas.' },
            { code: 'MAA', name: 'Mañanas (7.5h)', description: 'Turno de mañana de 7 horas y media.' },
            { code: 'T', name: 'Tarde (7h)', description: 'Turno de tarde estándar de 7 horas.' },
            { code: 'TAA', name: 'Tarde (7.5h)', description: 'Turno de tarde de 7 horas y media.' },
            { code: 'N', name: 'Noche (10h)', description: 'Turno de noche de 10 horas.' },
            { code: 'MGH', name: 'Mañana + Guardia Física', description: 'Turno combinado de 17 horas.' },
            { code: 'MGL', name: 'Mañana + Guardia Localizada', description: 'Turno combinado de 17 horas.' },
            { code: 'MGF', name: 'Guardia Física (24h)', description: 'Guardia de presencia física de 24 horas.' }
        ],
        vacationCodes: [
            { code: 'VAC', name: 'Vacaciones' },
            { code: 'VAA', name: 'Vac. por Antigüedad' },
            { code: 'VAP', name: 'Vac. Pendientes' },
            { code: 'VVP', name: 'Vac. Antig. Pendientes' },
        ],
        ldCodes: [
            { code: 'LIB', name: 'Libre Disposición' },
            { code: 'LDT', name: 'LD por Trienios' },
            { code: 'LDN', name: 'LD Año Anterior' },
            { code: 'LTA', name: 'LD Trienios Año Anterior' },
        ],
        permits: [
            { name: 'Permiso por Maternidad', category: 'familiares', details: '19 semanas (6 semanas obligatorio tras parto, 11 semanas flexibles hasta los 12 meses de menor y 2 semanas más hasta que el menor cumpla 8 años).', codes: ['MAT'] },
            { name: 'Permiso por Paternidad', category: 'familiares', details: '19 semanas (6 semanas obligatorio tras parto, 11 semanas flexibles hasta los 12 meses de menor y 2 semanas más hasta que el menor cumpla 8 años).', codes: ['PAR'] },
            { name: 'Permiso por Lactancia', category: 'familiares', details: '1 hora diaria o 2 fracciones de 1/2 hora, hasta los 12 meses del menor. O bien de forma acumulada: 6 semanas para la madre biológica y 5 semanas  para el otro progenitor.', codes: ['DLA'] },
            { name: 'Cuidado de familiar (Enf. muy grave)', category: 'familiares', details: 'Reducción hasta 50% de jornada (máx. 1 mes).', codes: [] },
            { name: 'Cuidado de hijo (Enf. grave)', category: 'familiares', details: 'Reducción de al menos 50% de jornada.', codes: [] },
            { name: 'Permiso por Causa de Fuerza Mayor', category: 'familiares', details: '4 días (28 horas)/año, no consecutivos.', codes: [] },
            { name: 'Matrimonio o Pareja de Hecho', category: 'personales', details: '15 días naturales.', codes: [] },
            { name: 'Traslado de Domicilio', category: 'personales', details: '1 día hábil.', codes: [] },
            { name: 'Permiso por preparación para donación de órganos o tejidos', category: 'salud', details: 'Tiempo indispensable para asistencia a sesiones de información, informes, exámenes clínicos y prestación de consentimiento, siempre que sea durante la jornada de trabajo.', codes: [] },
            { name: 'Asuntos Particulares (Libre Disposición)', category: 'personales', details: '6 días laborables por año.', codes: ['LIB', 'LDN'] },
            { name: 'Asuntos Particulares por Antigüedad', category: 'personales', details: '+2 días (6º trienio), +1 por trienio (desde el 8º).', codes: ['LDT', 'LTA'] },
            { name: 'Permiso sin sueldo (Asuntos Propios)', category: 'personales', details: 'Máximo 3 meses cada 2 años.', codes: [] },
            { name: 'Permiso Parental (Retribuído según últimas sentencias)', category: 'familiares', details: '8 semanas por hijos menores de 8 años (en caso de duda consulta a tu sindicato).', codes: [] },
            { name: 'Consulta Médica (propia o familiar)', category: 'salud', details: 'Tiempo indispensable y justificado.', codes: ['PCM'] },
            { name: 'Fallecimiento de Familiar', category: 'familiares', details: '2-5 días hábiles según parentesco.', codes: ['FFA'] },
            { name: 'Enfermedad sin baja (sin IT)', category: 'salud', details: 'Hasta 4 días/año (máx. 3 consecutivos).', codes: ['ENF', 'ESB', 'ESN'] },
            { name: 'Accidente Laboral/No Laboral', category: 'salud', details: 'Tiempo de baja según prescripción.', codes: ['A'] },
            { name: 'Asistencia a Exámenes Oficiales', category: 'formacion', details: 'Día completo (finales) o tiempo indispensable (parciales).', codes: ['CON'] },
            { name: 'Asistencia a Congresos', category: 'formacion', details: 'Tiempo indispensable, sujeto a necesidades.', codes: ['CON'] },
            { code: 'DPI', name: 'Deber Público Inexcusable', category: 'formacion', details: 'Tiempo indispensable (citaciones, DNI, etc.).', codes: ['DPI'] },
            { name: 'Compensación por Solape', category: 'compensatorios', details: '1-7 días hábiles/año según categoría.', codes: ['C'] },
            { name: 'Compensación 24 y 31 de Diciembre', category: 'compensatorios', details: '7 horas por cada día para contratos en vigor que comprendan estas fechas.', codes: ['FEF'] },
            { name: 'Compensación Sábados Festivos (Turno Mañana Fija L-V)', category: 'compensatorios', details: 'Un día adicional por cada sábado festivo en el año en curso para trabajadores con turno de mañanas fijas de lunes a viernes.', codes: ['D0H'] }
        ],
        aidaCodes: [
            { code: "A", description: "ACCIDENTE LABORAL/NO LABORAL", category: "Ausencia" },
            { code: "CON", description: "ASISTENCIA A CONGRESO", category: "Permiso" },
            { code: "D", description: "DESCANSO", category: "Jornada/Descanso" },
            { code: "DHU", description: "DIAS DE HUELGA", category: "Ausencia" },
            { code: "D0H", description: "DESCANSO FESTIVO EN SÁBADO", category: "Jornada/Descanso" },
            { code: "DLA", description: "DIAS LACTANCIA MATERNA", category: "Permiso" },
            { code: "DPI", description: "DEBER PÚBLICO INEXCUSABLE", category: "Permiso" },
            { code: "ENF", description: "ENFERMEDAD COMÚN/PROFESIONAL", category: "Ausencia" },
            { code: "ESB", description: "ENFERMEDAD SIN BAJA", category: "Ausencia" },
            { code: "ESN", description: "ENFERMEDAD SIN BAJA (REP. NÓMINA)", category: "Ausencia" },
            { code: "FEF", description: "COMPENSACIÓN FESTIVO 24/31 DICIEMBRE", category: "Compensación" },
            { code: "FFA", description: "PERMISO FALLECIMIENTO", category: "Permiso" },
            { code: "G09", description: "GUARDIAS 9 HORAS", category: "Turno" },
            { code: "GRF", description: "GUARDIA 24 HORAS FORMACIÓN", category: "Turno" },
            { code: "LDN", description: "LIBRE DISPOSICIÓN AÑO ANTERIOR", category: "Permiso" },
            { code: "LIB", description: "LIBRE DISPOSICIÓN", category: "Permiso" },
            { code: "LTA", description: "LIBRE DISPOSICIÓN TRIENIOS AÑO ANTERIOR", category: "Permiso" },
            { code: "LDT", description: "LIBRE DISPOSICIÓN TRIENIOS", category: "Permiso" },
            { code: "LIS", description: "LIBERADO SINDICAL", category: "Permiso" },
            { code: "MAN", description: "MAÑANAS 7 HORAS", category: "Turno" },
            { code: "MAA", description: "MAÑANAS 7,30 HORAS", category: "Turno" },
            { code: "MGF", description: "GUARDIA FISICA 24 HORAS", category: "Turno" },
            { code: "MGH", description: "MAÑANA+GUARDIA FÍSICA 17 HORAS", category: "Turno" },
            { code: "MGL", description: "MAÑANA+GUARDIA LOCALIZADA 17 HORAS", category: "Turno" },
            { code: "MLG", description: "GUARDIA 24 HORAS LOCALIZADA", category: "Turno" },
            { code: "MAT", description: "PERMISO MATERNIDAD", category: "Permiso" },
            { code: "N", description: "NOCHE DE 10 HORAS", category: "Turno" },
            { code: "PAR", description: "PERMISO PATERNIDAD", category: "Permiso" },
            { code: "PCM", description: "PERMISO CONSULTA MÉDICA", category: "Permiso" },
            { code: "PSC", description: "PERMISO SINDICAL COMPLETO", category: "Permiso" },
            { code: "PSI", description: "PERMISO SINDICAL PARCIAL", category: "Permiso" },
            { code: "MRG", description: "MAÑANA+GUARDIA FORMACIÓN 17 HORAS", category: "Turno" },
            { code: "T", description: "TARDE DE 7 HORAS", category: "Turno" },
            { code: "TAA", description: "TARDE DE 7,30 HORAS", category: "Turno" },
            { code: "VAA", description: "DIAS VACACIONES POR ANTIGÜEDAD", category: "Vacaciones" },
            { code: "VAC", description: "VACACIONES", category: "Vacaciones" },
            { code: "VAP", description: "VACACIONES PENDIENTES AÑO ANTERIOR", category: "Vacaciones" },
            { code: "VVP", description: "VACACIONES ANTIGÜEDAD AÑO ANTERIOR", category: "Vacaciones" }
        ].sort((a, b) => a.code.localeCompare(b.code))
    };

    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Elementos de la lógica del Resumen Global
    const summaryAntiquityYearsSpan = document.getElementById('summary-antiquity-years');
    const summaryVacationDaysSpan = document.getElementById('summary-vacation-days');
    const summaryLdDaysSpan = document.getElementById('summary-ld-days');
    const summaryTotalDaysSpan = document.getElementById('summary-total-days');
    const summaryAntiquitySlider = document.getElementById('summary-antiquity-slider');

    // Elementos para días tomados/restantes
    const vacationBaseTakenInput = document.getElementById('vacation-base-taken-input');
    const vacationAntiquityTakenInput = document.getElementById('vacation-antiquity-taken-input');
    const vacationBaseRemainingDaysSpan = document.getElementById('vacation-base-remaining-days');
    const vacationAntiquityRemainingDaysSpan = document.getElementById('vacation-antiquity-remaining-days');
    const vacationTotalRemainingDaysSpan = document.getElementById('vacation-total-remaining-days');

    const ldBaseTakenInput = document.getElementById('ld-base-taken-input');
    const ldTrieniosTakenInput = document.getElementById('ld-trienios-taken-input');
    const ldBaseRemainingDaysSpan = document.getElementById('ld-base-remaining-days');
    const ldTrieniosRemainingDaysSpan = document.getElementById('ld-trienios-remaining-days');
    const ldTotalRemainingDaysSpan = document.getElementById('ld-total-remaining-days');


    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            navButtons.forEach(btn => {
                btn.classList.remove('active-tab', 'highlight-nav-btn');
                btn.classList.add('inactive-tab');
            });
            button.classList.add('active-tab');
            button.classList.remove('inactive-tab');

            // Añadir la clase de resaltado específicamente para el botón "Resumen Global" si se hace clic
            if (tabId === 'resumen-global') {
                button.classList.add('highlight-nav-btn');
            }

            tabContents.forEach(content => {
                if (content.id === `tab-${tabId}`) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
            // Manejo especial para gráficos para asegurar que se rendericen correctamente cuando su pestaña es visible
            if (tabId === 'vacaciones') {
                if (vacationChart) vacationChart.resize();
            } else if (tabId === 'libre-disposicion') {
                if (ldChart) ldChart.resize();
            }
            updateSummary(); // Actualizar el resumen cada vez que se hace clic en una pestaña
        });
    });

    function populateShiftGrid() {
        const grid = document.getElementById('shift-grid');
        grid.innerHTML = data.shifts.map(shift => `
            <div class="bg-slate-100 p-3 rounded-lg hover:bg-teal-100 hover:shadow-md transition-all cursor-pointer border border-slate-200">
                <p class="font-semibold soft-text-dark">${shift.name}</p>
                <p class="text-xs font-mono soft-accent-bg soft-text-medium inline-block px-2 py-0.5 rounded mt-1">${shift.code}</p>
                <p class="text-xs text-slate-500 mt-1">${shift.description}</p>
            </div>
        `).join('');
    }

    function populateVacationCodesGrid() {
        const grid = document.getElementById('vacation-codes-grid');
        grid.innerHTML = data.vacationCodes.map(vc => `
            <div class="soft-accent-bg p-2 rounded border soft-accent-border">
                <p class="font-semibold soft-text-dark">${vc.name}</p>
                <p class="font-mono soft-text-medium bg-white inline-block px-1.5 rounded">${vc.code}</p>
            </div>
        `).join('');
    }

    function populateLDCodesGrid() {
        const grid = document.getElementById('ld-codes-grid');
        grid.innerHTML = data.ldCodes.map(ldc => `
            <div class="soft-accent-bg p-2 rounded border soft-accent-border">
                <p class="font-semibold soft-text-dark">${ldc.name}</p>
                <p class="font-mono soft-text-medium bg-white inline-block px-1.5 rounded">${ldc.code}</p>
            </div>
        `).join('');
    }
    
    const antiquitySlider = document.getElementById('antiquity-slider');
    const vacationAntiquityYearsSpan = document.getElementById('vacation-antiquity-years');
    const totalVacationDaysSpan = document.getElementById('total-vacation-days');
    const vacationChartCanvas = document.getElementById('vacation-chart');
    let vacationChart;
    let currentVacationDays = 0;

    function getVacationBonusDays(years) {
        if (years >= 30) return 4;
        if (years >= 25) return 3;
        if (years >= 20) return 2;
        if (years >= 15) return 1;
        return 0;
    }

    function updateVacationInfo() {
        const years = parseInt(antiquitySlider.value);
        const bonusDays = getVacationBonusDays(years);
        const baseDays = 22;
        currentVacationDays = baseDays + bonusDays;

        vacationAntiquityYearsSpan.textContent = years;
        totalVacationDaysSpan.textContent = `${currentVacationDays} días`;
        
        if (vacationChart) {
            vacationChart.data.datasets[0].data = [baseDays, bonusDays];
            vacationChart.update();
        }
        updateSummary();
    }

    function initVacationChart() {
        const ctx = vacationChartCanvas.getContext('2d');
        vacationChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Días Base', 'Días por Antigüedad'],
                datasets: [{
                    label: 'Días de Vacaciones',
                    data: [22, getVacationBonusDays(parseInt(antiquitySlider.value))],
                    backgroundColor: ['var(--ugt-red)', 'var(--ugt-red-light)'], /* UGT Red and lighter red */
                    borderColor: ['var(--ugt-red)', 'var(--ugt-red-light)'],
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { display: false },
                        suggestedMax: 30
                    },
                    y: {
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }

    const antiquitySliderLd = document.getElementById('antiquity-slider-ld');
    const ldAntiquityYearsSpan = document.getElementById('ld-antiquity-years');
    const totalLdDaysSpan = document.getElementById('total-ld-days');
    const ldChartCanvas = document.getElementById('ld-chart');
    let ldChart;
    let currentLdDays = 0;

    function getPersonalDays(years) {
        let baseDays = 6;
        let bonusDays = 0;
        const trienios = Math.floor(years / 3);

        if (trienios >= 6) { // Desde el 6º trienio (18 años)
            bonusDays += 2;
        }
        // Por cada trienio a partir del 8º trienio (24 años y siguientes), añadir 1 día adicional.
        if (trienios >= 8) { 
            bonusDays += (trienios - 7); 
        }
        return { base: baseDays, bonus: bonusDays, total: baseDays + bonusDays };
    }

    function updateLdInfo() {
        const years = parseInt(antiquitySliderLd.value);
        const ldData = getPersonalDays(years);
        currentLdDays = ldData.total;

        ldAntiquityYearsSpan.textContent = years;
        totalLdDaysSpan.textContent = `${currentLdDays} días`;
        
        if (ldChart) {
            ldChart.data.datasets[0].data = [ldData.base, ldData.bonus];
            ldChart.update();
        }
        updateSummary();
    }

    function initLdChart() {
        const ctx = ldChartCanvas.getContext('2d');
        ldChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Días Base', 'Días por Antigüedad'],
                datasets: [{
                    label: 'Días de Libre Disposición',
                    data: [6, getPersonalDays(parseInt(antiquitySliderLd.value)).bonus],
                    backgroundColor: ['var(--ugt-red)', 'var(--ugt-red-light)'], /* UGT Red and lighter red */
                    borderColor: ['var(--ugt-red)', 'var(--ugt-red-light)'],
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: { display: false },
                        suggestedMax: 15
                    },
                    y: {
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    const permitList = document.getElementById('permit-list');
    const permitSearch = document.getElementById('permit-search');
    const permitCategoryFilter = document.getElementById('permit-category-filter');

    function renderPermits(filterText = '', category = 'all') {
        const filteredPermits = data.permits.filter(permit => {
            const permitName = permit.name ? permit.name.toLowerCase() : '';
            const permitDetails = permit.details ? permit.details.toLowerCase() : '';

            const matchesCategory = category === 'all' || permit.category === category;
            const matchesText = permitName.includes(filterText.toLowerCase()) || permitDetails.includes(filterText.toLowerCase());
            return matchesCategory && matchesText;
        });

        if (filteredPermits.length === 0) {
            permitList.innerHTML = `<p class="text-slate-500 col-span-full text-center">No se encontraron permisos que coincidan con la búsqueda.</p>`;
            return;
        }
        
        permitList.innerHTML = filteredPermits.map(permit => {
    let permitCardHtml = `
        <div class="border soft-accent-border soft-accent-bg p-4 rounded-lg flex flex-col cursor-pointer">
            <h4 class="font-bold soft-text-dark">${permit.name}</h4>
            <p class="text-sm text-slate-700 flex-grow mt-1">${permit.details}</p>
            <div class="mt-3">
                ${permit.codes.map(code => `<span class="text-xs font-mono soft-text-dark soft-accent-bg px-2 py-1 rounded-full mr-1 border soft-border-medium">${code}</span>`).join('')}
            </div>
            ${(permit.name === 'Permiso por Maternidad' || permit.name === 'Permiso por Paternidad') ? `
                <div class="mt-4 pt-4 border-t border-slate-200 text-center">
                    <span class="text-sm font-semibold ugt-text-red">Calcula Aquí Tu Permiso</span>
                </div>
            ` : ''}
        </div>
    `;

    if (permit.name === 'Permiso por Maternidad' || permit.name === 'Permiso por Paternidad') {
        return `
            <a href="https://ugtsanidadsalamanca.github.io/Permisos_Parentales" target="_blank" rel="noopener noreferrer" class="block transition-all hover:shadow-lg">
                ${permitCardHtml}
            </a>
        `;
    } else {
        return permitCardHtml;
    }
}).join('');
    }
    
    const aidaCodeTableBody = document.getElementById('aida-code-table-body');
    const aidaCodeSearch = document.getElementById('aida-code-search');

    function renderAidaCodes(filterText = '') {
        const filteredCodes = data.aidaCodes.filter(item => 
            item.code.toLowerCase().includes(filterText.toLowerCase()) ||
            item.description.toLowerCase().includes(filterText.toLowerCase())
        );
        
        aidaCodeTableBody.innerHTML = filteredCodes.map(item => `
            <tr class="bg-white border-b hover:bg-slate-50">
                <td class="px-6 py-4 font-mono font-semibold soft-text-dark">${item.code}</td>
                <td class="px-6 py-4">${item.description}</td>
                <td class="px-6 py-4">
                    <span class="text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.category === 'Turno' ? 'soft-accent-bg soft-text-medium border soft-border-medium' :
                        item.category === 'Vacaciones' ? 'soft-accent-bg soft-text-medium border soft-border-medium' :
                        item.category === 'Permiso' || item.category === 'Compensación' ? 'ugt-bg-red text-white border ugt-border-red' :
                        'bg-slate-100 text-slate-800 border border-slate-200'
                    }">${item.category}</span>
                </td>
            </tr>
        `).join('');
    }

    function updateSummary() {
        const years = parseInt(summaryAntiquitySlider.value);
        summaryAntiquityYearsSpan.textContent = years;

        // Recalcular días de vacaciones según el slider del resumen
        const vacBonusEntitlement = getVacationBonusDays(years);
        const totalVacBaseEntitlement = 22;
        const totalVacEntitlement = totalVacBaseEntitlement + vacBonusEntitlement;
        summaryVacationDaysSpan.textContent = totalVacEntitlement;

        // Recalcular días personales según el slider del resumen
        const ldData = getPersonalDays(years);
        const totalLdBaseEntitlement = ldData.base;
        const ldTrieniosEntitlement = ldData.bonus;
        const totalLdEntitlement = totalLdBaseEntitlement + ldTrieniosEntitlement;
        summaryLdDaysSpan.textContent = totalLdEntitlement;

        // Calcular y mostrar días restantes para cada categoría
        const vacBaseTaken = parseInt(vacationBaseTakenInput.value) || 0;
        const vacAntiquityTaken = parseInt(vacationAntiquityTakenInput.value) || 0;
        const ldBaseTaken = parseInt(ldBaseTakenInput.value) || 0;
        const ldTrieniosTaken = parseInt(ldTrieniosTakenInput.value) || 0;

        const vacBaseRemaining = Math.max(0, totalVacBaseEntitlement - vacBaseTaken);
        const vacAntiquityRemaining = Math.max(0, vacBonusEntitlement - vacAntiquityTaken);
        const ldBaseRemaining = Math.max(0, totalLdBaseEntitlement - ldBaseTaken);
        const ldTrieniosRemaining = Math.max(0, ldTrieniosEntitlement - ldTrieniosTaken);

        // Actualizar la interfaz de usuario para los días restantes
        if (vacationBaseRemainingDaysSpan) {
            vacationBaseRemainingDaysSpan.textContent = `${vacBaseRemaining} días`;
        }
        if (vacationAntiquityRemainingDaysSpan) {
            vacationAntiquityRemainingDaysSpan.textContent = `${vacAntiquityRemaining} días`;
        }
        if (vacationTotalRemainingDaysSpan) {
            vacationTotalRemainingDaysSpan.textContent = `${vacBaseRemaining + vacAntiquityRemaining} días`;
        }

        if (ldBaseRemainingDaysSpan) {
            ldBaseRemainingDaysSpan.textContent = `${ldBaseRemaining} días`;
        }
        if (ldTrieniosRemainingDaysSpan) {
            ldTrieniosRemainingDaysSpan.textContent = `${ldTrieniosRemaining} días`;
        }
        if (ldTotalRemainingDaysSpan) {
            ldTotalRemainingDaysSpan.textContent = `${ldBaseRemaining + ldTrieniosRemaining} días`;
        }
        
        // Actualizar el "Total Días de Descanso" principal para mostrar la suma de todos los días restantes
        const finalTotalRemaining = vacBaseRemaining + vacAntiquityRemaining + ldBaseRemaining + ldTrieniosRemaining;
        summaryTotalDaysSpan.textContent = finalTotalRemaining;
    }

    // Lógica de cálculo de turnos de noche
    const nightShiftsInput = document.getElementById('night-shifts-input'); // Reverted to input
    const adjustedAnnualHoursSpan = document.getElementById('adjusted-annual-hours');
    const nightShiftMessage = document.getElementById('night-shift-message');

    function calculateAnnualHours() {
        const numberOfNights = parseInt(nightShiftsInput.value);
        const baseAnnualHoursDiurno = 1533; 

        if (isNaN(numberOfNights) || numberOfNights < 0) {
            adjustedAnnualHoursSpan.textContent = `${baseAnnualHoursDiurno} horas`;
            nightShiftMessage.textContent = "Introduce un número válido de noches.";
            return;
        }

        if (numberOfNights === 0) {
            adjustedAnnualHoursSpan.textContent = `${baseAnnualHoursDiurno} horas`;
            nightShiftMessage.textContent = "Para turno diurno o sin noches, la jornada base es 1.533 horas.";
        } else if (numberOfNights >= 1 && numberOfNights <= 142) {
            const foundData = nightHoursData.find(item => item.nights === numberOfNights);
            if (foundData) {
                adjustedAnnualHoursSpan.textContent = `${foundData.hours} horas`;
                nightShiftMessage.textContent = `Jornada según tabla oficial del BOCYL para ${numberOfNights} noches.`;
            } else {
                adjustedAnnualHoursSpan.textContent = `${baseAnnualHoursDiurno} horas`;
                nightShiftMessage.textContent = `No se encontró un valor exacto para ${numberOfNights} noches en la tabla.`;
            }
        } else {
            adjustedAnnualHoursSpan.textContent = `N/A`;
            nightShiftMessage.textContent = "El número de noches está fuera del rango (1-142) de la tabla oficial.";
        }
    }

    // Función para crear etiquetas dinámicas para el control deslizante
    function createDynamicSliderLabels(labelsContainerId, min, max, step) {
        const labelsContainerElement = document.getElementById(labelsContainerId);
        if (!labelsContainerElement) return;

        labelsContainerElement.innerHTML = ''; // Limpiar etiquetas existentes

        const labelsToShow = new Set();
        labelsToShow.add(min); // Siempre añadir el mínimo

        for (let i = min; i <= max; i += step) {
            labelsToShow.add(i);
        }
        labelsToShow.add(max); // Siempre añadir el máximo

        // Ordenar y añadir etiquetas al contenedor
        Array.from(labelsToShow).sort((a, b) => a - b).forEach(labelValue => {
            const span = document.createElement('span');
            span.textContent = labelValue;
            labelsContainerElement.appendChild(span);
        });
    }

    // Sincronizar sliders y actualizar información
    antiquitySlider.addEventListener('input', () => {
        const value = antiquitySlider.value;
        antiquitySliderLd.value = value;
        summaryAntiquitySlider.value = value;
        updateVacationInfo();
        updateLdInfo();
    });
    antiquitySliderLd.addEventListener('input', () => {
        const value = antiquitySliderLd.value;
        antiquitySlider.value = value;
        summaryAntiquitySlider.value = value;
        updateLdInfo();
        updateVacationInfo();
    });
    summaryAntiquitySlider.addEventListener('input', () => {
        const value = summaryAntiquitySlider.value;
        antiquitySlider.value = value;
        antiquitySliderLd.value = value;
        updateVacationInfo();
        updateLdInfo();
        updateSummary();
    });

    nightShiftsInput.addEventListener('input', calculateAnnualHours); // Reverted to input listener

    permitSearch.addEventListener('input', () => renderPermits(permitSearch.value, permitCategoryFilter.value));
    permitCategoryFilter.addEventListener('change', () => renderPermits(permitSearch.value, permitCategoryFilter.value));
    aidaCodeSearch.addEventListener('input', () => renderAidaCodes(aidaCodeSearch.value));

    // Nuevos listeners de eventos para los inputs "tomados"
    vacationBaseTakenInput.addEventListener('input', updateSummary);
    vacationAntiquityTakenInput.addEventListener('input', updateSummary);
    ldBaseTakenInput.addEventListener('input', updateSummary);
    ldTrieniosTakenInput.addEventListener('input', updateSummary);
    
    // Llamadas iniciales
    populateShiftGrid();
    populateVacationCodesGrid();
    populateLDCodesGrid();
    initVacationChart();
    initLdChart();
    
    // Rellenar etiquetas de slider dinámicas
    createDynamicSliderLabels('vacation-slider-labels', 0, 50, 5);
    createDynamicSliderLabels('ld-slider-labels', 0, 50, 5);
    createDynamicSliderLabels('summary-slider-labels', 0, 50, 5);

    updateVacationInfo();
    updateLdInfo();
    calculateAnnualHours();
    renderPermits();
    renderAidaCodes();
    updateSummary();
});
