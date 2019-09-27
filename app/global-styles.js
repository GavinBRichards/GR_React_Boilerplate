import { createGlobalStyle } from 'styled-components';

import Anton from './fonts/Anton/Anton-Regular.ttf';
import LibreFranklin from './fonts/Libre_Franklin/LibreFranklin-Regular.ttf';
import Montserrat from './fonts/Montserrat/Montserrat-Regular.ttf';
import Playfair from './fonts/Playfair_Display/PlayfairDisplay-Regular.ttf';
import Roboto from './fonts/Roboto/Roboto-Regular.ttf';
import Rubik from './fonts/Rubik/Rubik-Regular.ttf';

export const Theme = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#ccc',
};

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Anton;
    src: url(${Anton}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: LibreFranklin;
    src: url(${LibreFranklin}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Playfair;
    src: url(${Playfair}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${Roboto}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Rubik;
    src: url(${Rubik}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {

    height: 100%;
    width: 100%;
    max-width: 100%;
    overscroll-behavior-y: contain;
    margin: 0;
    font-size: 10px !important;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -font-smoothing: antialiased;
  }

  body {
    font-family: 'Playfair', Helvetica, Arial, sans-serif;
  }

  button {
    padding: none !important;
    margin: none !important;
  }

  link{
    padding: none !important;
    margin: none !important;
  }
`;
