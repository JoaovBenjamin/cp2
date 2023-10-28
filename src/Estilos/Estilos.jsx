// Importando o Styled-components
import { styled } from "styled-components";

// Criando e exportando uma const para estilizar o meu Header atraves do Styled-components
export const Headercss = styled.header`
   background-color: #248080;
   width: auto;

`

// Criando e exportando uma const para estilizar o meu menu da nav atraves do Styled-components

export const Navegacao = styled.nav`
       display:flex;
       justify-content: space-around;
`

// Criando e exportando uma const para estilizar o meu Links para o menu atraves do Styled-components

export const Links = styled.li`
     display:inline-flex;

`

export const A = styled.a`
    display:flex;
    flex-direction: row;
    text-decoration: none;
    color: aliceblue;
    font-size: 15px;
    margin: 20px;
    padding: 15px;
`
