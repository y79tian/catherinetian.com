import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    font-family: 'Baloo Thambi 2', sans-serif;

    // remove default margin and padding for all browsers
    body,html {
      margin: 0;
      padding: 0;
    }

    // scroll behaviour
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; // only supported by iOS

    // noinspection CssInvalidMediaFeature
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    // width
    ::-webkit-scrollbar {
      background: transparent;
      width: 15px;
      height: 15px;
    }

    // track
    ::-webkit-scrollbar-track {
      background: transparent;
      width: 5px;
      height: 5px;
    }

    // handle
    ::-webkit-scrollbar-thumb {
      background-color: grey;
      border: 5px solid transparent;
      border-radius: 1rem;
      background-clip: padding-box;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
`;

export default GlobalStyles;
