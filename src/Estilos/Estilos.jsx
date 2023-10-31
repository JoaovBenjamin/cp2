// Importando o Styled-components
import { styled } from "styled-components";


// Fazendo o Darktheme e o Ligtheme
export const lightTheme = {
    corFundo: '#F0F0F0',
    corTexto: '#333333',
    corTitulo:  '#0066CC',
    corHeader: '#248080',
    corLink: 'aliceblue',
    corBotao: '#008080',
    corHoverBotao: '#184950',

    

}

export const darkTheme = {
    corFundo: '#121212',
    corTexto: '#FFFFFF',
    corTitulo: ' #FFD700',
    corHeader: '#333333',
    corLink: '#00A09D',
    corBotao: '#003366',
    corHoverBotao: '#0055A4',
}

// Criando e exportando uma const para estilizar o meu Header atraves do Styled-components
export const Headercss = styled.header`
   background-color: ${props => props.theme.corHeader};
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
    color:${props => props.theme.corLink};
    font-size: 15px;
    margin: 20px;
    padding: 15px;
`
// Estilizando o h1 para os titulos da minha page
export const Titulo = styled.h1`
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-top: 18px;
    color:${props => props.theme.corTexto};
`

// Estilizações para o formulario de contato
export const BotaoCep = styled.button`
    background-color:${props => props.theme.corBotao};
    border: none;
    color: white;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    margin: 18px;
    border-radius: 50px;

    &:hover{
        background-color: ${props => props.theme.corHoverBotao};
    }
`


export const InformacoesCep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

`

export const SectionCep = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const SectionCepForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    gap: 5px;
`
/* Botão qu muda o tema */
export const BotaoTheme = styled.button`
    background-color:${props => props.theme.corBotao};
    border: solid 1px black;
    color: white;
    padding: 15px 32px;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 12px;
    margin: 16px;
    border-radius: 100px;

    &:hover{
        background-color: ${props => props.theme.corHoverBotao};
    }
`