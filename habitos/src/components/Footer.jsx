export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Hábitos de Estudio</h3>
          <p>Transforma tu manera de aprender y alcanza tus metas académicas con nuestros recursos.</p>
        </div>
        
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#importancia">Importancia</a></li>
            <li><a href="#problemas">Problemas</a></li>
            <li><a href="#soluciones">Soluciones</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li>info@habitosdeestudio.com</li>
            <li>+1 (234) 567-890</li>
          </ul>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} Hábitos de Estudio Efectivos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}