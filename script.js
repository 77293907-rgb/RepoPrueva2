// 1. Funcionalidad de Modo Oscuro / Claro
const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Cambiar texto del botón según el estado
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Oscuro';
    }
});

// 2. Funcionalidad de Saludo Personalizado
const inputNombre = document.getElementById('input-nombre');
const btnSaludar = document.getElementById('btn-saludar');
const mensajeSaludo = document.getElementById('mensaje-saludo');

btnSaludar.addEventListener('click', () => {
    const nombre = inputNombre.value.trim();
    if (nombre) {
        mensajeSaludo.textContent = `¡Hola, ${nombre}! Bienvenido a la página.`;
        inputNombre.value = ''; // Limpiar el campo
    } else {
        mensajeSaludo.textContent = 'Por favor, escribe tu nombre primero.';
    }
});

// Permitir saludar presionando la tecla "Enter"
inputNombre.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnSaludar.click();
    }
});

// 3. Funcionalidad del Contador
let cuenta = 0;
const textoContador = document.getElementById('contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnReiniciar = document.getElementById('btn-reiniciar');

btnSumar.addEventListener('click', () => {
    cuenta++;
    textoContador.textContent = cuenta;
});

btnRestar.addEventListener('click', () => {
    cuenta--;
    textoContador.textContent = cuenta;
});

btnReiniciar.addEventListener('click', () => {
    cuenta = 0;
    textoContador.textContent = cuenta;
});