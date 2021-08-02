import React from 'react'
import axios from 'axios'

import './TelaUsuarioReservar.css'

function TelaUsuarioReservar (props) {

    function btnCancelar(e) {
        e.preventDefault();
        props.callback(false);
    }

    function btnCadastrar(e){

    }

    return (
        <div className='modal-container'>
        <div className='modal-background'></div>
        <div className='modal-container-inner'>
            <form onSubmit={btnCadastrar}>
                <input type="time" />
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
    )
}


export default TelaUsuarioReservar