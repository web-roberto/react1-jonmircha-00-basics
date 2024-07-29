import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  // En la llamada al componente, se usa un {si es no-string} o "string" solamente
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>   {/* Convierte un arrya a un string: */}
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

//una 'prop' por defecto con un valor 
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

//exigimos una prop con un campo 'numero'
//https://www.npmjs.com/package/prop-types
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
