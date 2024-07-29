import React from "react";
import { useState, useEffect } from "react";

// lo pongo aqui por sencillez import { useFetch } from "../hooks/useFetch";
// VIDEO 20 - hooks personalizados (GENERALIZACIÓN Y REUTILIZACIÓN DE CÓDIGO) ************************************************************************************************

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //url = "https://jsonplaceholder.typicode.com/users";
  //console.log(useFetch());

  // usamos {} y no [] al desestructurar del hook personalizado
  let { data, isPending, error } = useFetch(url);
  //isPending es true o false, para escribirlo -> {JSON.stringify(isPending)}
  //'data' es un array, para escribirlo -> {JSON.stringify(data)}
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</code>
      </pre>
    </>
  );
}

// VIDEO 20 - hooks personalizados ---- FETCH GENERICO ---- ************************************************************************************************
// useFetch es un FC que devuelve un objeto con las variables STATE
// hace un Fecth y comprueba los errores.
// hacemos EXPORT y NO EXPORT DEFAULT para exportar dos o tres hooks en el futuro
// export (si está en un fichero aparte)
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) { // res.ok es del fetch cuando termina correctamente
          throw {
            err: true,
            status: res.status, //res.status es del fetch 
            //res.statusText es del fetch 
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json(); //convertir a JSON es asíncrono. No uso el .then
        // el segundo .then tampoco lo uso al usar async/await con fetch

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]); // cuando cambia el argumento 'url': cada llamada a este hook
  return { data, isPending, error }; //devuelve los STATE y no repinta nada
};
