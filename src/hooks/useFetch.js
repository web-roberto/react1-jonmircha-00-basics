import { useState, useEffect } from "react";
// VIDEO 20 - hooks personalizados ---- FETCH GENERICO ---- ************************************************************************************************
// useFetch es un FC que devuelve un objeto con las variables STATE
// hace un Fecth y comprueba los errores.
// hacemos export y no export default para exportar dos o tres en el futuro
export const useFetch = (url) => {
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
