import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: var(--grey-0);
        font-family: 'Inter', sans-serif;
    }

    :root{
        --purple: #403CAA;
        --green: #11995E;
        --grey-100: #333333;
        --grey-50: #999999;
        --grey-0: #F5F5F5;
    }
`;

export default GlobalStyle;
