//Importando os componentes da pasta "Componentes" que vou utilizar para escrever esse arquivo
import Header from "../Componentes/Header";
import Formulario from "../Componentes/Formulario";

//Escrevendo o codigo para está pagina 
function Contato(){
    return(
        <>
          <Header></Header>
          <Formulario></Formulario>
        </>
    )
}

//Exportando esse arquivo para ser utilizado no "App.jsx"
export default Contato