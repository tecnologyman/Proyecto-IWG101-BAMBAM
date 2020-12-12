import React from "react";
import './App.css';
import pcexpress from "./pcexpress.png";

function Tiendas() {
  return (
    <div>
        <h1>Tiendas Page</h1>
        <div classname="pcexpress">
          <img src={pcexpress} 
          width="200" 
          height="100">
        </img>
        <h2>PcExpress</h2>
        </div>
        <div>
          A pesar de que la seccion dice tiendas, por ahora solo sera esta tienda, ya que te tiene una mayor vericidad de las reputaciones y comentarios de esta.          
        </div>
    </div>
  );
}

export default Tiendas;