import React from "react";
// enChrome, Elements veo '<styles></styles>' que se genera automáticamente antes del <body></body>
import "./Estilos.css";
import "./Estilos.scss"; //CSS normal + $variable + &:hover
import moduleStyles from "./Estilos.module.css"; //CSS normal y uso: moduleStyles.success
// VIDEO 23 - ESTILOS CSS ************************************************************************************************
// create-react-app pone en el CONSOLE del Chrome el <style que de aplica - sólo en DESARROLLO
export default function Estilos() {
  // el objeto que se pasa al atributo 'style'
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en línea
      </h3>
      <h3 className="bg-react">
        Agregando Normalize con
        <br />
        {/* El CSS: @import-normalize; se llama en index.css al principio */}
        {/* preserva los valores por defecto de los navegadores. */}
        <code>@import-normalize;</code>
      </h3>
      {/* así se usa el ESTILOS.MODULE.CSS */}
      <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con Módulos</h3>
      {/* NPM INSTALL NODE-SASS  y creamo un Estilos.scss y lo importamos aquí 
       En SASS usamos $variables con $ y &:hover */}
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
