import React, { useState, useEffect } from "react";
// VIDEO 17 - useEffect ************************************************************************************************

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  // hacemos 4 useEffect y cada uno se ejecuta en un momento concreto
  useEffect(() => { // USO: normalmente sólo se una un useEffect
    console.log("Moviendo el Scroll-actualiza la variable scrollY (estado)");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {// ComponentWillUnmount
      window.removeEventListener("scroll", detectarScroll);
      console.log("Fase de Desmontaje");
    };
  }, [scrollY]); // cuando cambia la variable de estado scrollY

  useEffect(() => { //componentDidMount -> [] -> Sólo cuando se ha montado (pintado)
    console.log("Fase de Montaje");
  }, []);

  useEffect(() => { //componentDidUpdate -> se ejecuta siempre que se repinte el documento
    console.log("Fase de Actualización");
  }); //cuando cambia una prop(parámetro del componente) o un state del componente

  useEffect(() => {
    return () => { // ComponentWillUnmount -> cuando se va a desmontar el componente
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
