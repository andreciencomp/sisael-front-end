import React, { useEffect, useState } from 'react'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import ListaLabGerencia from './ListaLabGerencia'
import GerenciarSalas from '../GerenciarSalas/GerenciarSalas'
import './GerenciaLaboratorios.css'
import axios from 'axios'
import { object } from 'prop-types';

function GerenciaLaboratorios() {

    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
    const [mostrarModalLab, setMostrarModalLab] = useState(false);
    const [labs, setLabs] = useState([]);
    const [lab, setLab] = useState(null);

    function exibirModalCadastro() {
        if (mostrarModalCadastro)
            setMostrarModalCadastro(false);
        else
            setMostrarModalCadastro(true);
    }

    const abrirLab = function (e) {
        if (lab == null) {
            setLab({ id: e.target.id, nome: e.target.name });
            setMostrarModalLab(true);
        } else {
            if (lab.nome !== e.target.name) {
                setLab({ id: e.target.id, nome: e.target.name });
                setMostrarModalLab(true);
            } else {
                setLab();
                setMostrarModalLab(false);
            }
        }
    }

    return (
        <div className="container">
            <div className="list-Lab">
                <ListaLabGerencia abrir={abrirLab} />
            </div>
            <div className="container-tela-lab">
                {mostrarModalLab && <GerenciarSalas callback={setMostrarModalLab} idLab={lab} />}
            </div>
            <div id="add">
                <div className="btn-tab">
                    <button onClick={exibirModalCadastro}>Cadastrar Laboratorio</button>
                </div>
                <div className="container-tela">
                    {mostrarModalCadastro && <TelaCadastroLaboratorio callback={setMostrarModalCadastro} />}
                </div>
            </div>

        </div>
    );

}

export default GerenciaLaboratorios;
