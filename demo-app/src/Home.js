import React from "react";
import './App.css';
import logo from "./bambamiconopng.png";
import intro from "./pcintro.jpeg";

function Home() {
  return (
    <div class="inicio">
      <img src={logo} width="150" height="100"></img>
      <h1>¡Hola!, Bienvenido a Feedback Store´s o tambien llamada BAMBAM.</h1>
      <i> <h2>¿Eres Nuevo por aquí?. Pues te explicaré como funcionará esta web.</h2> <br/>
      <h3>Para comenzar, aquí encontrarás tiendas de hardware de todo Chile, permitiendote conocer sus </h3>
      <h3>defectos como virtudes, y así tener unas desición clara a la hora de comprar en dichas tiendas</h3> <br/>
      <h4>En la barra de navegacion superior puedes observar las secciones "home", "tiendas" y "about". En este momento estas en "home"</h4>
      <h4>En la seccion tiendas puedes observar todas las tiendas que tendremos en la pagina, pero por ahora por la facilidad y confiabilidad solo estaran los comentarios sobre la pagina pcexpress, todo esto en la seccion "tiendas"</h4> </i>
      <div class="pc">
      <u><h2>Esta Tienda es PcExpress</h2></u>
        <a title="PcExpress" href="https://tienda.pc-express.cl" target="_blank"><img src={intro} alt="PcExpress" height="30%" width="90%" class="pce"/></a>
      </div>
      <i><h3>Y por ultimo en la seccion "about" está la informacion de los desarrolladores de la pagina que en este caso somos nosotros</h3></i>
    </div>
  );
}
export default Home;
