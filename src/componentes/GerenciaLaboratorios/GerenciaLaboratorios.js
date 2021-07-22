import React, { useEffect, useState } from 'react'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import './GerenciaLaboratorios.css'
import axios from 'axios'

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
            console.log(response.data);
            setLabs({labs: response.data.nome});
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div class="container">

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
