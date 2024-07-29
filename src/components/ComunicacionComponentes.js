import React, { Component } from "react";
// VIDEO 12-COMUNIACION ENTRE COMPONENTES ************************************************************************************************

export default class Padre extends Component {
  state = { contador: 0, };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        {/* Creamos un prop que apunta a una función que será llamada por el hijo */}
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      {/* Llama a una función del componente padre y cambia el estado del padre */}
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
