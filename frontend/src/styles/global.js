import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
        font-family: "Poppins", sans-serif;
    }
    body {
        min-height: 100vh;
        background-color: #FAFAFA;
    }

 
`;

export default Global;
