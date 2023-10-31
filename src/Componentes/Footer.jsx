import { Rodape, DivFooter,Links, A } from "../Estilos/Estilos";

function Footer(){
   return(
    <>
        <Rodape>
            <DivFooter>
                <Links><A href="/">Home</A></Links>
                    <Links><A href="/Sobre">Sobre</A></Links> 
                    <Links><A href="/Tema">Tema</A></Links> 
                    <Links><A href="/Contato">Contato</A>
                </Links>
            </DivFooter>
        </Rodape>
    </>
   )
}

export default Footer