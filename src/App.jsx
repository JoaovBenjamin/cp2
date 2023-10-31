// Importando o necessario para fazer as rotas entre as paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importando as minhas Paginas
import Home from "./Paginas/Home";
import Contato from "./Paginas/Contato";
import Sobre from "./Paginas/Sobre";
import Tema from "./Paginas/Tema"

// Importando estilos e componentes para o darkTheme e ligthTheme
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme,darkTheme,BotaoTheme, DivTema } from './Estilos/Estilos';

function App(){
  // Armazendo o tema ligt como padrão
    const [theme, setTheme] = useState('light')

  // fazendo uma condicional para mudar o tema
    const mudarTheme = () => {
      setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
    }
  return (
    <>

    {/* Criando a minha rota entre as paginas */}
    <ThemeProvider theme={theme === 'light' ? darkTheme: lightTheme}>
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
              <Route path="/Contato" element={<Contato></Contato>}></Route>
              <Route path="/Tema" element={<Tema></Tema>}></Route>
            </Routes>
        </BrowserRouter> 
        {/* Botão de troca do tema*/}

        <DivTema>
          <BotaoTheme onClick={mudarTheme}>Mudar Tema</BotaoTheme>
          </DivTema>
      </ThemeProvider>
      
    </>
  )
}

export default App
