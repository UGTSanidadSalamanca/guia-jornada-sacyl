/* Nuevas variables de paleta de colores */
:root {
    --ugt-red: #E4002B;
    --ugt-red-light: #fca5a5;
    --primary-soft-dark: #0D9488; /* Teal-600 */
    --primary-soft-medium: #14B8A6; /* Teal-500 */
    --primary-soft-light: #CCFBF1; /* Teal-100 */
    --text-dark: #1e293b; /* slate-800 */
    --text-medium: #475569; /* slate-600 */
    --bg-light: #f8fafc; /* slate-50 */
    --border-light: #e2e8f0; /* slate-200 */
}

body { 
    font-family: 'Inter', sans-serif; 
    background-color: var(--bg-light); 
    color: var(--text-dark); 
}

/* Botones de navegación */
.nav-btn {
    @apply text-sm md:text-base font-semibold py-2 px-4 rounded-lg border transition-colors duration-300 shadow-sm;
}
.active-tab {
    background-color: var(--ugt-red);
    color: white;
    border-color: var(--ugt-red);
}
.inactive-tab {
    background-color: var(--primary-soft-light); /* Fondo más suave */
    color: var(--primary-soft-dark); /* Texto más suave */
    border-color: var(--primary-soft-medium); /* Borde más suave */
}
.nav-btn:hover:not(.active-tab) {
    background-color: var(--primary-soft-medium); /* Hover más suave */
    color: white;
    border-color: var(--primary-soft-dark);
}

/* Botón "Resumen Global" resaltado */
.highlight-nav-btn {
    background-color: var(--ugt-red); /* Mantener UGT Red para énfasis */
    color: white;
    border-color: white; /* Borde blanco para énfasis */
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    width: 100%; /* Ancho completo en pantallas pequeñas */
    min-width: 180px; /* Example: give it a minimum width */
    order: -1; /* Move to the beginning of the flex container */
}
.highlight-nav-btn:hover {
    background-color: #c20025; /* Rojo UGT más oscuro en hover */
    border-color: white;
    transform: translateY(-1px);
}
@media (min-width: 768px) {
    .highlight-nav-btn {
        width: auto; /* Revert to auto width on larger screens, but min-width still applies */
    }
}

/* Elementos generales con color UGT Red - ahora más selectivos */
.ugt-bg-red {
    background-color: var(--ugt-red);
}
.ugt-text-red {
    color: var(--ugt-red);
}
.ugt-border-red {
    border-color: var(--ugt-red);
}

/* Nuevas clases de acento más suaves */
.soft-accent-bg {
    background-color: var(--primary-soft-light);
}
.soft-accent-border {
    border-color: var(--primary-soft-medium);
}
.soft-text-dark {
    color: var(--primary-soft-dark);
}
.soft-text-medium {
    color: var(--primary-soft-medium);
}
.soft-border-medium {
    border-color: var(--primary-soft-medium);
}

/* Contenedor de gráficos */
.chart-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    max-height: 350px;
}
@media (min-width: 768px) {
    .chart-container {
        height: 350px;
    }
}

/* Estilo personalizado para el pulgar y la pista del control deslizante */
input[type="range"]::-webkit-slider-thumb {
    background-color: var(--primary-soft-dark); /* Color más suave para el pulgar */
}
input[type="range"]::-moz-range-thumb {
    background-color: var(--primary-soft-dark);
}
input[type="range"]::-ms-thumb {
    background-color: var(--primary-soft-dark);
}
/* Default track color */
input[type="range"]::-webkit-slider-runnable-track {
    background-color: var(--primary-soft-medium); /* Pista más visible */
    border-radius: 4px; /* Rounded corners for the track */
    height: 8px; /* Make the track slightly thicker */
}
input[type="range"]::-moz-range-track {
    background-color: var(--primary-soft-medium);
    border-radius: 4px;
    height: 8px;
}
input[type="range"]::-ms-track {
    background-color: var(--primary-soft-medium);
    border-radius: 4px;
    height: 8px;
}

/* Hover/Active state for the track */
input[type="range"]:hover::-webkit-slider-runnable-track,
input[type="range"]:active::-webkit-slider-runnable-track {
    background-color: var(--primary-soft-dark); /* Darker on hover/active */
}
input[type="range"]:hover::-moz-range-track,
input[type="range"]:active::-moz-range-track {
    background-color: var(--primary-soft-dark);
}
input[type="range"]:hover::-ms-track,
input[type="range"]:active::-ms-track {
    background-color: var(--primary-soft-dark);
}
