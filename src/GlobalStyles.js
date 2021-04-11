import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
}

html,
body,
#root {
  min-height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: #2d3142;
  color: #fff;
  
  overflow-x: hidden;
}


input,button,textarea {
  background-color: initial;
  outline: none;
  max-width:100%;
    padding:0;
    border-color: transparent;
    box-shadow: inset -6px -6px 18px rgba(151, 255, 249, 0.13),
      inset 6px 2px 15px #000000;
    color: #fff;
    border-radius:24px;
  }
  button:focus{
    outline:none;
  }

input{
  padding:15px;
}

h1{
  text-shadow: -6px -6px 18px rgba(129, 255, 247, 0.13), 6px 6px 18px #000000;
}

`;

export const SwitchButton = styled(Switch)`
  box-shadow: -6px -6px 18px rgba(151, 255, 249, 0.13), 6px 2px 15px #000000;
  margin-top: 10px;
`

export const ButtonInput = styled(Button)`
  outline: none;
  background-color: #2d3142;
  color: #fff;
  border-color: white;
  border-radius: 30px !important;
  margin-right: 18px;
  font-size: 13pt;
  color: white;
  transition: 400ms;

  &&&&:hover {
    background-color: initial;
    border-color: initial;
  }

  &&&&:active,
  &&&&:focus {
    background-color: initial;
    border-color: initial;
    outline: none !important;
    box-shadow: inset -2px -2px 15px rgba(129, 255, 247, 0.13),
      inset 2px 2px 15px #000000;
    color: #00b19f;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-self: center;
  text-align: center;
  justify-content: center;
  max-width: 100%;
`;

export default GlobalStyles;
