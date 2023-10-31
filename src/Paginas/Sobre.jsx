//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import { Body, SectionConteudo, Titulo, Texto } from "../Estilos/Estilos";
import Footer from "../Componentes/Footer";

//Escrevendo o codigo para está pagina 
function Sobre(){
    return(
        <>
            <Header></Header>
            <Body>
                <SectionConteudo>
                    <Titulo>Sobre Mim</Titulo>
                    <Texto>Eu sou um entusiasta da programação, embarcando na minha jornada de aprendizado no vasto universo do desenvolvimento de software. Atualmente, estou na quinta checkpoint da minha jornada, onde estou explorando as maravilhas de React e Vite, duas tecnologias de ponta que me fascinam.</Texto>
                    <Texto>Meu projeto atual tem um foco especial em saúde mental, um tópico que considero de extrema importância, especialmente no mundo moderno. Através da programação, estou encontrando maneiras de criar soluções e recursos que podem contribuir para o bem-estar emocional das pessoas.</Texto>
                    <Texto>Minha jornada de aprendizado está sendo apoiada pela FIAP, uma instituição renomada que me ajuda a solidificar meu conhecimento em programação e tecnologia. Estou ansioso para crescer como desenvolvedor, enfrentando desafios, aprendendo e contribuindo para um mundo digital mais saudável e acolhedor.</Texto>
                </SectionConteudo>
            </Body>
            <Footer></Footer>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"

export default Sobre