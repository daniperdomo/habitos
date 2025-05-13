import Header from "../components/Header";
import Card from "../components/Card";
import "../assets/styles/main.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      
      {/* Card con imagen a la derecha */}
      <Card 
        title="Importancia de los hábitos de estudio"
        imageUrl= "../src/assets/reading.jpg"
        imageAlt="Estudiante leyendo un libro"
      >
        <p>Los hábitos influyen directamente en el rendimiento académico, autoestima y bienestar emocional.</p>
        <p><strong>Dato clave:</strong> +30% de estudiantes en Latinoamérica tienen problemas de autogestión.</p>
      </Card>

      {/* Card con imagen a la derecha */}
      <Card 
        title="Problemas comunes"
        imageUrl= "../src/assets/problem.jpg"
        imageAlt="Estudiante distraído con tecnología"
      >
        <ul>
          <li>Falta de motivación y procrastinación</li>
          <li>Distracciones tecnológicas</li>
          <li>Métodos de enseñanza poco atractivos</li>
        </ul>
      </Card>

      {/* Card con imagen a la derecha */}
      <Card 
        title="Soluciones efectivas"
        imageAlt="Métodos de estudio visuales"
      >
        <ul>
          <li>Técnica Pomodoro para gestión del tiempo</li>
          <li>Mapas mentales para mejor retención</li>
          <li>Estudio activo vs. memorización pasiva</li>
          <li>Espaciamiento de repasos</li>
        </ul>
      </Card>

      {/* Card SIN imagen (se adapta automáticamente) */}
      <Card title="Beneficios a largo plazo">
        <ul>
          <li>Mejor capacidad de concentración</li>
          <li>Reducción del estrés académico</li>
          <li>Desarrollo de disciplina aplicable a otras áreas</li>
          <li>Mayor retención del conocimiento</li>
        </ul>
      </Card>

      {/* Card con imagen a la derecha */}
      <Card 
        title="Nuestro método"
        imageAlt="Método de estudio"
      >
        <p>Desarrollamos un sistema basado en:</p>
        <ol>
          <li>Diagnóstico personalizado</li>
          <li>Planificación adaptativa</li>
          <li>Seguimiento con retroalimentación</li>
          <li>Herramientas digitales de apoyo</li>
        </ol>
      </Card>
    </div>
  );
}