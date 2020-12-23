import React from "react";
import './App.css';
import usm from "./usm.png"

function About() {
  return (
    <div class="about">
        <u><h1>Quienes Somos</h1></u>
        <h1>Los desarrolladores de esta pagina web son:</h1>
        <h2>Matias Aguayo</h2>
        <h2>Ariel Pulgar</h2>
        <h2>Benjamin Mardones</h2>
        <h3>Los 3 Estudiantes de ingenieria civil informatica en la Universidad Federico Santa Maria</h3> <br/>
        <div class="usm">
          <a title="USM" href="https://usm.cl" target="_blank"><img src={usm} alt="usm" /></a> <br/>
          <h3><a href="https://proyectodepanaiwg1.wixsite.com/website" target="_blank">Pagina web del proyecto</a></h3>
          <h3><a href="https://proyectodepanaiwg1.wixsite.com/website" target="_blank">GitHub del proyecto</a></h3>
        </div>
    </div>
  );
}

export default About;
