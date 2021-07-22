import React, { useEffect, useState } from 'react'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import ListaLabGerencia from './ListaLabGerencia'
import './GerenciaLaboratorios.css'
import axios from 'axios'
import { object } from 'prop-types';

function GerenciaLaboratorios() {

    const [mostrarModal, setMostrarModal] = useState(false);
    const [labs, setLabs] = useState([]);

    function exibirModal() {
        if (mostrarModal)
            setMostrarModal(false);
        else
            setMostrarModal(true);
    }

    function listarLaboratorios() {
        axios.post('http://localhost:8080/laboratorio/listar')
        .then(response => {
            console.log("entrou");
            console.log(response.data);
            setLabs({labs: response.data.nome});
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div class="container">
            <div class="list-Lab">
                <ListaLabGerencia />
            </div>
            <div class="btn-tab">
                <button onClick={exibirModal}>Cadastrar Laboratorio</button>
            </div>
            <div class="container-tela">
                {mostrarModal && <TelaCadastroLaboratorio callback={setMostrarModal} />}
            </div>

        </div>
    );

}

export default GerenciaLaboratorios;
