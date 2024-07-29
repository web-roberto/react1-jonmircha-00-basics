import React from "react";
// VIDEO 24 - STYLED COMPONENTS ************************************************************************************************
// YARN ADD STYLED-COMPONENTS y la extension VSCode styled-components-snippets -> el css de styled se ve en colores
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
  `;

  // personaliza mi H3 con prop 'color' y 'isButton' booleano
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color};
    color: ${({ color }) => color}; // es lo mismo que la linea de antes
    color: ${({ color }) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;

    /* ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `} */

    &:hover {background-color: ${mainAlphaColor80};}
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  // personalizamos nuestro DIV
  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `
  // personalizamos nuestro DIV YA PERSONALIZADO ANTES
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;
  // redefinimos el h2 a nivel global
  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Hola Soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">
        Hola Soy un h3 estilizado con styled-components
      </MyH3>
      <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja redondeada light</BoxRounded>
      </ThemeProvider>
      {/* Aqui se usan los theme de manera muy sencilla: */}
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
