import React, { Component } from "react";
// VIDEO 13-CICLO DE VIDA DE COMPONENTES DE CLASE ************************************************************************************************

class Reloj extends Component { //pinta la hora
  constructor(props) {super(props);}
  // componentWillUnmount se ejecuta cuando es 'false' this.state.visible pq no se
  // pinta <Reloj hora={this.state.hora} /> 
  componentWillUnmount() {console.log(3, "El componente ha sido eliminado del DOM");}
  render() {return <h3>{this.props.hora}</h3>;}
}

export default class CicloVida extends Component {
  constructor(props) {super(props);
    console.log(0, "El componente se inicializa, aún NO está en el DOM");
    this.state = {hora: new Date().toLocaleTimeString(),visible: false,};
    this.temporizador = null;
  }
  componentDidMount() {console.log(1, "El componente ya se encuentra en el DOM");}
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);}
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString(),});
    }, 1000);
  };

  iniciar = () => { // crea el temporizador
    this.tictac();
    this.setState({visible: true,});
  };

  detener = () => {
    clearInterval(this.temporizador); //borra el temporizador
    this.setState({visible: false,});
  };

  render() { //se repinta al cambiar el valor de las variables de estado
    console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
