import { createGlobalStyle } from 'styled-components';

// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

import DancingScript from './Dancing Script.woff';
// import PermanentMarker from './PermanentMarker-Regular.ttf'; // './nameOfYourFont.woff2';

export const FontNames = [
  'Dancing Script',
  'Open Sans',
];

// use this link to obtain woff fonts
// https://fonts.googleapis.com/css?family=Dancing+Script

export default createGlobalStyle`
  @font-face {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: 400;
    // src: url(https://fonts.gstatic.com/s/dancingscript/v15/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup6hNX6plRP.woff) format('woff');
    src: url(${DancingScript}) format('woff');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;
