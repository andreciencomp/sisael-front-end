import React, { useState } from 'react'
import axios from 'axios'
import './TelaCadastroEquipamento.css'
function TelaCadastroEquipamento(props) {

    const [tombamento, setTombamento] = useState(0);
    const [nome, setNome] = useState("");

    function btnCancelar(e) {
        e.preventDefault();
        props.callback(false);
    }

    function btnCadastrar(e) {
        e.preventDefault();

        console.log("Chegou aqui");
        axios.post('http://localhost:8080/equipamentos/cadastrar',{
            idSala: e.target.idSala.value,
            tombamento: e.target.tombamento.value,
            nome: e.target.nome.value
        }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='modal-container'>
            <div className='modal-background'></div>
            <div className='modal-container-inner'>
                <form onSubmit={btnCadastrar}>
                    <label>Tombamento</label>
                    <input name='tombamento' type="number" />
                    <label>Nome</label>
                    <input name='nome' type='text' />
                    <label>Id sala</label>
                    <input name='idSala' type='number' className="sala" />
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