import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
/* import styled from 'styled-components'; */
/* import poppins-Weights: 600, open sans---Weights: 400, 700 */
/* - Mobile:375px - Desktop:1440px */
/* Some suggestions can be found below:- [Font Awesome](https://fontawesome.com/) - [IcoMoon](https://icomoon.io/) 
- [Ionicons](https://ionicons.com/) */

:root {
  --primary-color: hsl(322, 100%, 66%);

  /* Neutral colors */
  --white: #fff;
  --very-pale-cyan: hsl(193, 100%, 96%);
  --very-dark-cyan: #00252e;
  --grayish-blue: hsl(208, 11%, 55%);

  /* fonts */
  --heading-font: "Poppins", sans-serif;
  --body-font: "Open-sans", sans-serif;
  --default-font-size: 1.8rem;

  --shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  
  @media (max-width: 48em) {
    font-size: 5%;

   
  
}

body {
  font-family: var(--body-font);
  font-size: var(--default-font-size);
  /* letter-spacing: 1.5px; */
  /* background-color: var(--bg-color); */
  /* color: var(--color-white); */
}

a,
li {
  text-decoration: none;
  list-style: none;
}
img {
  width: 100%;
}

`;

export default GlobalStyles;
