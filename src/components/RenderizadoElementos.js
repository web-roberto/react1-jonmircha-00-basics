import React, { Component } from "react";
import data from "../helpers/data.json";

// VIDEO 08 ************************************************************************************************
function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} rel="noreferrer" target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((el, index) => (
          // el key={index} no es un PROP, EL PROP es 'el'
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            // el key={el.id} no es un PROP, EL PROP es 'el'
            <ElementoLista key={el.id} el={el} /> 
          ))}
        </ul>
      </div>
    );
  }
}
