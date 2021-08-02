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
        if (e.target.tombamento.value !== "" && e.target.nome.value !== "") {
            axios.post('http://localhost:8080/equipamentos/cadastrar', {
                idSala: props.sala.id,
                tombamento: e.target.tombamento.value,
                nome: e.target.nome.value
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
            alert("Cadastro realizado com sucesso!");
            props.callback(false);
        }

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
                    <label>Nome da sala</label>
                    <input name='nomeSala' type='text' className="sala" value={props.sala.nome} disabled />
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