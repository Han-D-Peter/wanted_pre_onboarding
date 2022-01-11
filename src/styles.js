import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset},
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    button{
      background: inherit; 
      border:none; 
      box-shadow:none; 
      border-radius:0; 
      padding:0; 
      overflow:visible; 
      cursor:pointer;
    }
    body {
        font-size:14px;
        font-family:'윤고딕330'
    }
    a {
      text-decoration: none;
      color:black
    }
    
`;
