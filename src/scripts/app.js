import "../style/main.scss";

// Importar los estilos de AOS
import 'aos/dist/aos.css';

// Importar la librería JS de AOS
import AOS from 'aos';

// Inicializar AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        offset: 200,
        once: false,
        mirror: true
    });

});

