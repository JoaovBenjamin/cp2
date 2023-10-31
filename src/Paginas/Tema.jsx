//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo

import Header from "../Componentes/Header";
import { Titulo,Texto,Body,SectionConteudo } from "../Estilos/Estilos";
import Footer from "../Componentes/Footer";

//Escrevendo o codigo para está pagina 

function Tema(){
    return(
        <>
            <Header></Header>
            <Body>
                <SectionConteudo>
                    <Titulo>Como Melhorar Sua Saúde Mental Pós-Pandemia</Titulo>
                    <Texto>O seu bem estar mental depende do que você pensa de si mesmo, então comece por ser gentil consigo mesmo. Praticar a autocompaixão significa tratar-se com o mesmo amor e respeito que oferece aos outros. Reconheça suas imperfeições, perdoe-se e lembre-se de que todos enfrentam desafios.</Texto>
                    <Texto>O apoio social desempenha um papel crucial na saúde mental. Cultive relacionamentos significativos com amigos e familiares, compartilhando preocupações e conquistas. Estar conectado é essencial.</Texto>
                    <Texto>O estresse faz parte da vida, mas saber gerenciá-lo é fundamental. Utilize técnicas como a respiração profunda, o relaxamento muscular progressivo e a prática de hobbies para reduzir o impacto do estresse.</Texto>
                    <Texto>Não hesite em procurar a ajuda de um profissional de saúde mental se estiver enfrentando dificuldades significativas. Terapia e aconselhamento são recursos valiosos para superar desafios emocionais.</Texto>
                </SectionConteudo>
            </Body>
            <Footer></Footer>

        </>
    )
}
//Exportando esse arquivo para ser utilizado no "App.jsx"

export default Tema