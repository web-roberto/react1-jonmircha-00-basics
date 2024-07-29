import React, { useState, useEffect } from "react";
// VIDEO 19 - useEffect y AJAX y API's ************************************************************************************************
function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}


export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  /* useEffect(() => {
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

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []); */

  useEffect(() => {
    // *********************************** IMPORTANTE : *************************************************************
    // para usar async/await debemos crea una función dentro del useEffect y llamarla
    // No usar:   useEffect(async() => {
    const getPokemons = async (url) => {
      let res = await fetch(url), //como fetch(url)
      //añadir validaciones de curso de JS de Jonmircha
        json = await res.json(); //como el .then((res)=>res.json())
      //console.log(json);

      json.results.forEach(async (el) => { //como el .then((json) => {json.results.forEach((el) => {
        let res = await fetch(el.url),
          json = await res.json();// como .then((res)=>res.json())
        //console.log(json);
        let pokemon = { // como .then((json)=>{....})
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        // *********************************** IMPORTANTE : *************************************************************
        // AÑADIR UN OBJETO A UN ARRAY (STATE) 
        setPokemons((pokemons) => [...pokemons, pokemon]);
        // NO ES LO MISMO QUE  setPokemons([...pokemons, pokemon]); solo funciona con el 1er pokemon

      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []); //Sólo se ejectua al montar el Componente

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
