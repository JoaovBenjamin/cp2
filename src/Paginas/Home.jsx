//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import { Titulo, Texto,SectionConteudo,Body } from "../Estilos/Estilos";
import Footer from "../Componentes/Footer";

//Escrevendo o codigo para está pagina 
function Home(){
    return(
        <>
        
            <Header></Header>
            <Body>
            <SectionConteudo>
            <Titulo>A Saúde Mental e Sua Importância Pós-Pandemia</Titulo>
            <Texto>Nossa saúde mental sempre foi um aspecto crucial do nosso bem-estar geral, mas a pandemia de COVID-19 trouxe à tona uma realidade inequívoca: a saúde mental é um tesouro invisível que todos nós devemos proteger e fortalecer.</Texto>
            <Texto>A pandemia trouxe consigo desafios inéditos - o isolamento, a incerteza, o medo e a perda tornaram-se parte do nosso cotidiano. À medida que o mundo luta para se recuperar, o impacto na saúde mental é uma preocupação crescente. A importância da saúde mental nunca foi tão evidente, e cuidar dela é fundamental.</Texto>
            <Texto>Cuidar da saúde mental após a pandemia é especialmente crucial. Os efeitos do estresse prolongado, da perda e do isolamento podem perdurar muito tempo depois que a crise de saúde pública for superada. É um momento em que devemos nos unir para garantir que as feridas invisíveis da mente sejam tratadas com a mesma seriedade que as físicas.</Texto>
            <Texto>
            Então, junte-se a nós nesta jornada. Vamos construir juntos um caminho para uma mente equilibrada e resiliente. Afinal, a saúde mental é o nosso patrimônio mais valioso, e é nosso dever protegê-lo e nutri-lo em todos os momentos, especialmente agora</Texto>
            </SectionConteudo>
            </Body>
            <Footer></Footer>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Home