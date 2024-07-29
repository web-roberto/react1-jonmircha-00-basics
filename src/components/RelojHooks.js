import React, { useState, useEffect } from "react";
// VIDEO 18 - useEffect ************************************************************************************************

function Reloj({ hora }) {
return <h3>{hora}</h3>;
}
export default function RelojHooks() {
  //cada vez que se renderiza, se ejecuta el useEffect en funcion de las condiciones de disparo
  // del [], hará algo o no, pero RETRASA LA EJECUCIÓN
  // Podemos usar varios useEffect
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) { //cuando cambiar el state 'visible' a true
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {//cuando cambiar el state 'visible' a false
      clearInterval(temporizador);//cuando NO VISIBLE, se elimina el temporizador
    }

    return () => {//cuando NO VISIBLE, NO SE PINTA Y SE DESMONTA
      //console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]); //cuando cambiar el state 'visible' a true o false

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {/* Cuando no visible, SE DESMONTA EL COMPONENTE (return del useEffect): */}
      {visible && <Reloj hora={hora} />} 
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}
