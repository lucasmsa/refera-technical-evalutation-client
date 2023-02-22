import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 500;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.common.white};
  }
`;

export default GlobalStyle;
