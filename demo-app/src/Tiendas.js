import React from "react";
import './App.css';
import pcexpress from "./pcexpress.png";

function Tiendas() {
  return (
    <div>
        <div></div>
        <div classname="pcexpress">
          <a title="PCExpress" href="https://tienda.pc-express.cl" target="_blank"><img src={pcexpress} alt="PCExpress" height="100" width="200"/></a>
          <u><h1>PCExpress</h1></u>
        </div>
        <i><h3>
          A pesar de que la seccion dice tiendas, por ahora solo sera esta tienda, ya que te tiene una mayor vericidad de las reputaciones y comentarios de esta.          
        </h3></i>
    </div>
  );
}

export default Tiendas;