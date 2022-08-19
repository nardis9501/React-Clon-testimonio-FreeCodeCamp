//import logo from './logo.svg';
import './App.css';
// import {cambio} from 'react';
import {Testimonio} from "./componentes/Testimonio";

function App() {

  return (
    <div  className="App">
      <div id="contenedor-principal" className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

            
      <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn.png'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio1='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.'
      negrita=' freeCodeCamp cambió mi vida.'
      testimonio2=''/>

      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah.png'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio1=''
      negrita='freeCodeCamp fue la puerta de entrada a mi carrera'
      testimonio2=' como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>

      
      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma.png'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio1='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de '
      negrita='freeCodeCamp fue el que se quedó'
      testimonio2='. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      
      <Testimonio
      nombre='Nardis Del Campo Soler'
      pais='Cuba'
      imagen='nardis.jpg'
      cargo='CEO'
      empresa='NarYuri Company'
      testimonio1='La tendencia indica que las personas con un nivel de profesionalización elevado o una alta cualificación aprenden más rápido a desarrollar en cualquier lenguaje, pero, esto está muy lejos de ser absoluto. Tu puedes en poco tiempo ser un desarrollador muy competente. '
      negrita='Arriézgate y alcanza tu sueño con freeCodeCamp!'
      testimonio2=''/>
      
      </div>
    </div>
  );
  
}


export default App;
