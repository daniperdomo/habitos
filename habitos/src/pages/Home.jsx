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
        image="/images/reading.jpg"
        imagePosition="right"
      >
        <p>Los hábitos de estudio influyen directamente en el rendimiento académico, la autoestima y el bienestar emocional de los estudiantes. Un enfoque adecuado en el estudio no solo mejora las calificaciones, sino que también fomenta una actitud positiva hacia el aprendizaje.</p>
        
        <p><strong>Dato clave:</strong> +30% de estudiantes en Latinoamérica tienen problemas de autogestión.</p>
        
        <h3>Impacto de los hábitos de estudio:</h3>
        <ul>
          <li><strong>Rendimiento académico:</strong> Los estudiantes que establecen rutinas de estudio tienden a obtener mejores calificaciones.</li>
          <li><strong>Autoestima:</strong> La mejora en el rendimiento académico refuerza la confianza en sí mismos.</li>
          <li><strong>Bienestar emocional:</strong> Un buen manejo del tiempo y las tareas reduce el estrés y la ansiedad.</li>
        </ul>
      </Section>

      
      <Section 
        title="Problemas comunes"
        image= "/images/problem.jpg"
        imagePosition="left"
        darkBg
      >
        <ul>
          <li>Falta de motivación y procrastinación</li>
          <li>Distracciones tecnológicas</li>
          <li>Métodos de enseñanza poco atractivos</li>
          <li>Consecuencias: bajo rendimiento, deserción escolar, ansiedad y estrés</li>
        </ul>
      </Section>
      
      <Section 
        title="Soluciones efectivas"
      >
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Actividades prácticas</h3>
            <p>Gestión del tiempo en intervalos concentrados</p>
          </div>
          <div className="solution-item">
            <h3>Promover metas</h3>
            <p>Establecimiento y cumplimiento de objetivos</p>
          </div>
          <div className="solution-item">
            <h3>Uso de tecnología</h3>
            <p>Juegos, videos o cuestionarios para hacer el aprendizaje más atractivo</p>
          </div>
          <div className="solution-item">
            <h3>Técnica pomodoro</h3>
            <p>Gestión del tiempo en intervalos concentrados</p>
          </div>
        </div>
      </Section>

      <Section 
        title="Fundamentos teóricos"
        image="/images/fundamento.jpg"
        imagePosition="left"
        darkBg
      >
        
        <h3>Aprendizaje Constructivista</h3>
        <p>Este enfoque sostiene que los estudiantes aprenden mejor cuando interactúan activamente con el contenido y participan en experiencias prácticas. Al construir su propio conocimiento, los estudiantes desarrollan una comprensión más profunda y duradera.</p>
        
        <h3>Psicología Positiva y Educación Emocional</h3>
        <p>Desarrollar competencias emocionales y habilidades de autogestión es esencial para el éxito a largo plazo. La educación emocional ayuda a los estudiantes a manejar sus emociones, establecer metas y mantener la motivación, lo que se traduce en un mejor rendimiento académico.</p>
        
      </Section>
      
      <Section 
        title="Beneficios esperados"
        image="/images/longterm.png"
        imagePosition="right"
      >
        <ul>
          <li>Mejor capacidad de concentración</li>
          <li>Reducción del estrés académico</li>
          <li>Desarrollo de disciplina aplicable a otras áreas</li>
          <li>Mayor retención del conocimiento</li>
        </ul>
      </Section>

      <Section 
        title="Ejemplos de hábitos efectivos"
      >
        <div className="solutions-grid">
          <div className="solution-item">
            <h3>Organización del tiempo</h3>
            <p>Establecimiento de metas claras y gestión del tiempo para maximizar la productividad.</p>
          </div>
          <div className="solution-item">
            <h3>Técnicas de estudio activas</h3>
            <p>Uso de resúmenes, mapas mentales y autoevaluaciones para un aprendizaje más efectivo.</p>
          </div>
          <div className="solution-item">
            <h3>Rutinas saludables</h3>
            <p>Incorporar descanso, alimentación balanceada y ejercicio en la vida diaria.</p>
          </div>
          <div className="solution-item">
            <h3>Uso responsable de la tecnología</h3>
            <p>Utilizar herramientas digitales de manera efectiva para mejorar el aprendizaje.</p>
          </div>
        </div>
      </Section>

      
      <Footer />
    </div>
  );
}