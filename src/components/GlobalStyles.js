import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Roboto", cursive;
        height: 100vh;
        #root {
            height: 100%;
            .App {
                height: 100%;
            }
        }
    }

`;

export default GlobalStyles;
