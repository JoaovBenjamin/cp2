// importando o useState do React para manipular os dados da pagina
import { useState } from "react";
// Importando o axios para consumir a API
import axios from 'axios';
//importando os esilos
import { BotaoCep, InformacoesCep,SectionCep,SectionCepForm,Texto, } from "../Estilos/Estilos";

function Cep() {

    // Vamos criar os estados para armazenar o cep
    const[cep, setCep] = useState('')
    
    // Estado par armazenar os dados retornados da nossa api VIACEP
    const[data,setData] = useState({})

    //Estado para manipular o erro
    const[error,setError] = useState(null)

    //Lidar com a mudança do campo de entrada CEP
    function handleCepChange(e) {
        setCep(e.target.value)
    }

    function pesquisaCEP() {
        //Usar o axios: manipula o get 
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            
            //Define uma função CALLBACK que será chamada se a requisição for bem-sucedida 
            .then(
                function(response){
                    if(response.data && !response.data.error) {
                        setData(response.data)
                        setError(null)
                    }
                    else{
                        setData({})
                        setError('CEP NÃO ENCONTRADO')
                    }
                }
                
            )
            .catch(
                function(error) {
                    setData({})
                    setError('CEP NÃO ENCONTRADO')
                }
            )
    }
    return(
        <>
        {/* Fazendo o formulario e chamando as funções que eu criei para realizar a pesquisa do cep */}
        <SectionCep>
            <SectionCepForm>
                <p>Nome:</p>
                <input type="text" placeholder="Digite seu Nome"></input>
                <p>Email:</p>
                <input type="text" placeholder="Digite seu email"></input>
                <p>Numero da Casa:</p>
                <input type="text" placeholder="Digite o numero do local"/>
                <p>Pesquisar Cep:</p>
                <input type="text" placeholder="Digite o Cep" value={cep} onChange={handleCepChange} />
            </SectionCepForm>
            <BotaoCep onClick={pesquisaCEP}>Pesquisar Cep</BotaoCep>
            {/* Retornado as informações apos pesquisar o cep */}
            {
                error && <p>{error}</p>
            }

            {
                data.cep && (
                    <InformacoesCep>
                            <Texto>CEP: {data.cep} </Texto>
                            <Texto>Logradouro: {data.logradouro}</Texto>
                            <Texto>Bairro: {data.bairro}</Texto>
                            <Texto>UF: {data.uf}</Texto>
                            <Texto>DDD: {data.ddd}</Texto>
                    </InformacoesCep>
                )
            }
        </SectionCep>
        </>
    )
}


export default Cep