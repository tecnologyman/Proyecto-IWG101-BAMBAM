import React from "react";
import './App.css';
import pcexpress from "./pcexpress.png";
import DataTiendas from "./tiendas.json";

function Tiendas() {
  return (
    <div>
        <div classname="pcexpress">
          <a title="PCExpress" href="https://tienda.pc-express.cl" target="_blank"><img src={pcexpress} alt="PCExpress" height="216" width="384"/></a>
          <u><h1>PCExpress</h1></u>
        </div>

        /*<i><h3>
          A pesar de que la seccion dice tiendas, por ahora solo sera esta tienda, ya que se tiene una mayor vericidad de las reputaciones y comentarios de esta.          
        </h3></i>*/

        <div> 
          {DataTiendas.map((data, index)=>{
            return <div>
              <h1>{data.id}</h1>
              <
          </div>
          })}
        </div>
    </div>
  );
}

export default Tiendas;