// Importando o necessario para fazer as rotas entre as paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importando as minhas Paginas
import Home from "./Paginas/Home";
import Contato from "./Paginas/Contato";
import Sobre from "./Paginas/Sobre";
import Tema from "./Paginas/Tema" ;

function App(){
  return (
    <>

    {/* Criando a minha rota entre as paginas */}
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
              <Route path="/Contato" element={<Contato></Contato>}></Route>
              <Route path="/Tema" element={<Tema></Tema>}></Route>
            </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App
