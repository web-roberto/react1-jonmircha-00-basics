import React, { createRef, useRef } from "react";
// VIDEO 21 - useRef  ************************************************************************************************
// ROBERTO: comentarios
export default function Referencias() {
  //let refMenu = createRef(), NO PUEDE USARSE EN FC (en Class Component si), por eso usamos useRef
  let refMenu = useRef(), //es un SELECTOR de un elemento del DOM en React: e.event o document.getElementoById
    refMenuBtn = useRef(); // substituyo a id= (ni e.target) y uso refXX.current

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    // SOLUCION 1: CON STATE 'VISIBLE' SIN USEREF: - MONTA Y DESMONTA LOS ELEMENTOS CON BLOCK/NONE
    /* const $menu = document.getElementById("menu");
    if (e.target.textContent === "Menú") { //el BOTON
      e.target.textContent = "Cerrar"; //esta abierto el 'nav' y se puede 'Cerrar'
      $menu.style.display = "block"; //CSS aque muestra el 'nav'
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";  //esta cerrado el 'nav' y se puede 'Menú' (abrir)
    } */

    // SOLUCION 2: CON USEREF: NO MONTA Y DESMONTA LOS ELEMENTOS CON BLOCK/NONE
    if (refMenuBtn.current.textContent === "Menú") { //refXX.current = e(e=refXX).target (origen del evento)
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";//CSS aque muestra el 'nav' //refYY.current=document.getElementById("menu")
    } else {
      refMenuBtn.current.textContent = "Menú"; //era Cerrar y cambio a Menú (está cerrado el menú)
      refMenu.current.style.display = "none"; //CSS aque esconde el 'nav'
    }
  };
  // tengo un referencia al botón de hamburguesa y una referencia al menu que es visible o no.
  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
      </nav>
    </>
  );
}
