import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: var(----grey1-0);
        font-family: 'Inter', sans-serif;
    }

    :root{
        --purple: #403CAA;
        --green: #11995E;
        --grey1-100: #333333;
        --grey1-50: #999999;
        --grey1-0: #F5F5F5;
    }
`;

export default GlobalStyle;
