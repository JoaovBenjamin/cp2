//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import Formulario from "../Componentes/Formulario";
import { Body } from "../Estilos/Estilos";
import Footer from "../Componentes/Footer";


//Escrevendo o codigo para está pagina 
function Contato(){
    return(
        <>
          <Header></Header>
          <Body>
          <Formulario></Formulario>
          </Body>
          <Footer></Footer>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Contato