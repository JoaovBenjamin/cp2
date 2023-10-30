// importando o useState do React para manipular os dados da pagina
import { useState } from "react";
// Importando o axios para consumir a API
import axios from 'axios';
//importando os esilos
import { BotaoCep, InformacoesCep,SectionCep } from "../Estilos/Estilos";

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
        //Usar o axios: manipula o get (Fazer uma requisição)
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            
            //Define uma função CALLBACK que será chamada se a requisição for bem-sucedida (similar ao try except)
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
        <SectionCep>
           <input type="text" placeholder="Digite seu Nome"></input>
           <input type="text" placeholder="Digite seu email"></input>
           <input type="text" placeholder="Digite o numero do local"/>
           <input type="text" placeholder="Digite o Cep" value={cep} onChange={handleCepChange} />
            <BotaoCep onClick={pesquisaCEP}>Pesquisar Cep</BotaoCep>
            {
                error && <p>{error}</p>
            }

            {
                data.cep && (
                    <InformacoesCep>
                            <p>CEP: {data.cep} </p>
                            <p>Logradouro: {data.logradouro}</p>
                            <p>Bairro: {data.bairro}</p>
                            <p>UF: {data.uf}</p>
                            <p>DDD: {data.ddd}</p>
                    </InformacoesCep>
                )
            }
        </SectionCep>
        </>
    )
}


export default Cep