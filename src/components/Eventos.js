import React, { Component } from "react";

// VIDEO 09 - BINDING ************************************************************************************************
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // el BIND se hace DENTRO DEL CONSTRUCTOR
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// VIDEO 10 - ES7 PROPERTIES INITIALIZER ************************************************************************************************
//Properties Initializer
export class EventosES7 extends Component {
  // ES7: No necesita CONSTRUCTOR NI BIND
  state = {
    contador: 0,
  };

  //Arrow  functions sin CONST y es AUTOBINDING
  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// VIDEO 11 ************************************************************************************************
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
  /* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>); */
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => { //mesaje es un parámetro mío
    console.log(e);//SyntethicMouseEvent(sintético) vs MouseEvent(nativo)
    console.log(e.nativeEvent); //e, pero Nativo JS sin la capa de React
    console.log(e.target);
    console.log(e.nativeEvent.target); //e e.target, pero Nativo JS sin la capa de React
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        {/* PARAMETRO DESDE UN MANEJADOR DE EVENTOS*/}
        {/* <Boton onClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento") /> */}
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* EVENTOS PERSONALIZADOS, EN ETIQUETA(Componente): no podemos usar onClick, creamos un myOnClick(funcion como props) que se llama desde el hijo con
        el <boton> real*/}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}
