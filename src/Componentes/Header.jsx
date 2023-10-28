// Importando as estilizações do meu cabecario da pasta "Estilos", do arquivo "Estilos.jxs"
import { Headercss, Links, Navegacao,A } from "../Estilos/Estilos";

// Criando a função header onde vou escrever meu codigo do cabecario, com as classes que eu importei para montar um Header padrão
function Header(){
    return(
        <>
           <Headercss>
                <Navegacao>
                    <Links><A href="/">Home</A></Links>
                    <Links><A href="/Sobre">Sobre</A></Links> 
                    <Links><A href="/Tema">Tema</A></Links> 
                    <Links><A href="/Contato">Contato</A></Links>     
                </Navegacao> 
           </Headercss> 
        </>
    )
}

// Exportando o Header para ele ser usado nas minhas Paginas
export default Header;