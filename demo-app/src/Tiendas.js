import React from "react";
import './App.css';
import pcexpress from "./pcexpress.png";
import DataTiendas from "./tiendas.json";
import "./texto.txt"

function Tiendas() {
  return (
    <div>
      <ul class="cuadro">
        <a title="PCExpress" href="https://tienda.pc-express.cl" target="_blank"><img src={pcexpress} alt="PCExpress" height="216" width="384"/></a>
        {DataTiendas.map((data, index)=>{
          return <div>
            <u><h1>{data.name}</h1></u>
            <h2 align="center">Ranking: {data.ranking}</h2>
            <h1>Comentarios:</h1>
            <div class="comentarios">
              <h4>{data.comment1}</h4>
              <h4>{data.comment2}</h4>
              <h4>{data.comment3}</h4>
              <h4>{data.comment4}</h4>
              <h4>{data.comment5}</h4>
              <h4>{data.comment6}</h4>
              <h4>{data.comment7}</h4>
              <h4>{data.comment8}</h4>
              <h4>{data.comment9}</h4>
              <h4>{data.comment10}</h4>
              <h4>{data.comment11}</h4>
              <h4>{data.comment12}</h4>
              <h4>{data.comment13}</h4>
              <h4>{data.comment14}</h4>
              <h4>{data.comment15}</h4>
            </div>
        </div>
       })}
     </ul>
    </div>
  );
}

export default Tiendas;