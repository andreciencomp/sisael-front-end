import React, { useState } from 'react'
import './TelaCadastroEquipamento.css'
function TelaCadastroEquipamento(props){

    const[tombamento, setTombamento] = useState(0);
    const[nome, setNome] = useState("");

    function btnCancelar(e){
        e.preventDefault();
        props.callback(false);
    } 

    function btnCadastrar(e){
        e.preventDefault();
        setTombamento(e.target.tombamento.value);
        setNome(e.target.nome.value)
          
        let opcoes = {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({tombamento:e.target.tombamento.value, nome:e.target.nome.value})
        };

        fetch('http://localhost:8080/equipamentos/cadastrar'
        , opcoes)
        .then(response=> response.json())
        .then(data => {
            console.log(data);
            alert("Cadastrado");
        e.target.tombamento.value = ""});

        
    }

    



    return(
            <div className='modal-container'>
                <div className='modal-background'></div>
                <div className='modal-container-inner'>
                    <form onSubmit={btnCadastrar}>
                        <label htmlFor='tombamento'>Tombamento</label>
                        <input name='tombamento' type='text'/>
                        <label htmlFor='nome'>Nome</label>
                        <input id='nome' type='text'></input>
                        <div className='buttons-area'>
                            <button type='submit' >Cadastrar</button>
                            <button id='cancelar' onClick={btnCancelar}>Cancelar</button>
                        </div>
                    </form>
                    

                </div>
            </div>
            );


}

export default TelaCadastroEquipamento;