import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600&family=Raleway:wght@100;300;400&display=swap');

    ${reset};
    *{
        box-sizing: border-box;
    }
    html,
    body{
        font-family: 'Rajdhani';
        margin:0;
        width: 100vw;
        height: auto;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing: border-box;
        //background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        background: #4789B2;
        overflow: scroll;
    }

    a{
        text-decoration: none;
        color: #0f0f0f;
    }

    input{
        &:focus{
            outline:none;
        }
    }

`

export default GlobalStyles;