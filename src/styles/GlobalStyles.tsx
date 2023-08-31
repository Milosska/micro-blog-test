import { createGlobalStyle } from "styled-components";
import { normalize } from "@styled/modern-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}

body {
      position: relative;
      display: flex;
   flex-direction: row;
  justify-content: center;

    width: 100%;
  margin: 0;
  background-color: #FFFFFF;
  
    font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#000000;
  font-size: 20px;
  line-height: normal;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
  margin:0;
    padding: 0;
}

a {
     color:inherit;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

button {
  cursor: pointer;
  border: none;
  
  &:focus {
    outline: none;
  }
}
`;
