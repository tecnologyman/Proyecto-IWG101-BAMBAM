import React from "react";
import './App.css';
import logo from "./bambamiconopng.png";

function Home() {
  return (
    <div>
      <img src={logo}
        width="150" 
        height="100">
        </img>
      <h1>¡Hola!, Bienvenido a Feedback Store´s o tambien llamada BAMBAM.</h1>
      <h2>¿Eres Nuevo por aquí?. Pues te explicaré como funcionará esta web.</h2> <br/>
      <h3>Para comenzar, aquí encontrarás tiendas de hardware de todo Chile, permitiendote conocer sus </h3>
      <h3>defectos como virtudes, y así tener unas desición clara a la hora de comprar en dichas tiendas</h3>
    </div>
  );
}
export default Home;