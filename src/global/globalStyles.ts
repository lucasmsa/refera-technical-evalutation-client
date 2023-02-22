import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 500;
  }

  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.common.white};
  }
`;

export default GlobalStyle;
