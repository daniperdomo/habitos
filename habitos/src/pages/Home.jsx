import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "../assets/styles/main.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      
      <HeroSection 
        title="Hábitos de Estudio Efectivos"
        subtitle="Transforma tu manera de aprender y alcanza tus metas académicas"
        backgroundImage="src/assets/images/reading.jpg"
      />
      
      <Section 
        title="Importancia de los hábitos de estudio"
        image="../src/assets/reading.jpg"
        imagePosition="right"
      >
        <p>Los hábitos influyen directamente en el rendimiento académico, autoestima y bienestar emocional.</p>
        <p><strong>Dato clave:</strong> +30% de estudiantes en Latinoamérica tienen problemas de autogestión.</p>
      </Section>
      
      <Section 
        title="Problemas comunes"
        image= "../src/assets/problem.jpg"
        imagePosition="left"
        darkBg
      >
        <ul>
          <li>Falta de motivación y procrastinación</li>
          <li>Distracciones tecnológicas</li>
          <li>Métodos de enseñanza poco atractivos</li>
        </ul>
      </Section>
      
      <Section 
        title="Soluciones efectivas"
        fullWidth
      >
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Técnica Pomodoro</h3>
            <p>Gestión del tiempo en intervalos concentrados</p>
          </div>
          <div className="solution-item">
            <h3>Mapas mentales</h3>
            <p>Para mejor retención y organización visual</p>
          </div>
          <div className="solution-item">
            <h3>Estudio activo</h3>
            <p>Enfocado en comprensión vs. memorización pasiva</p>
          </div>
          <div className="solution-item">
            <h3>Espaciamiento</h3>
            <p>Repasos distribuidos para mejor retención</p>
          </div>
        </div>
      </Section>
      
      <Section 
        title="Beneficios a largo plazo"
        image="../src/assets/longterm.png"
        imagePosition="right"
      >
        <ul>
          <li>Mejor capacidad de concentración</li>
          <li>Reducción del estrés académico</li>
          <li>Desarrollo de disciplina aplicable a otras áreas</li>
          <li>Mayor retención del conocimiento</li>
        </ul>
      </Section>
      
      <Footer />
    </div>
  );
}