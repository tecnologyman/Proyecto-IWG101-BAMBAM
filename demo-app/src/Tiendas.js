import React from "react";
import './App.css';
import pcexpress from "./pcexpress.png";
import DataTiendas from "./tiendas.json";

function Tiendas() {
  return (
    <div>
      <div classname="pcexpress">
        <a title="PCExpress" href="https://tienda.pc-express.cl" target="_blank"><img src={pcexpress} alt="PCExpress" height="216" width="384"/></a>
      </div>
      <div> 
        {DataTiendas.map((data, index)=>{
          return <div>
            <u><h1>{data.name}</h1></u>
            <h2 align="center">Ranking: {data.ranking}</h2>
            <div align="left" margin="1"> <h4>
              {data.comment1}
              <p>{data.comment2}</p>
              <p>{data.comment3}</p>
              <p>{data.comment4}</p>
              <p>{data.comment5}</p>
              <p>{data.comment6}</p>
              <p>{data.comment7}</p>
              <p>{data.comment8}</p>
              <p>{data.comment9}</p> 
            </h4></div> 
        </div>
       })}
     </div>
    </div>
  );
}

export default Tiendas;