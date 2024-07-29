import React, { Component } from "react";
// VIDEO 14- PETICIONES ASÍNCRONAS (AJAX's y API's) en CLASES *** CON FETCH *********************************************************************************************

function Pokemon(props) { //pinta un Pokemon
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() { //llamada a API cuando ya está montado y no en el constructor
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              //hace una desestructuración del array y añade el nuevo objeto
              // y hace una asignación para machacar el estado anterior
              let pokemons = [...this.state.pokemons, pokemon]; 
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {/* Al ppio sale Cargando y cuando tiene datos cargados en el array pinta los pokemones */}
        {this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>) 
        : (this.state.pokemons.map((el) => (<Pokemon key={el.id} name={el.name} avatar={el.avatar} />))
        )}
      </>
    );
  }
}
