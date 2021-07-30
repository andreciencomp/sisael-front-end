import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./GerenciarSalas.css"
import ListarSalaGerencia from '../ListarSalaGerencia'
import TelaCadastroEquipamento from '../TelaCadastroEquipamento/TelaCadastroEquipamento';

function GerenciarSalas(props) {

    const [lab, setLab] = useState();
    const [sala, setSala] = useState();
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);

    function addEquipamento(e) {
        if (mostrarModalCadastro == null) {
            setSala({ id: e.target.id, nome: e.target.name });
            setMostrarModalCadastro(true);
        } else {
            if (mostrarModalCadastro.nome !== e.target.name) {
                setSala({ id: e.target.id, nome: e.target.name });
                setMostrarModalCadastro(true);
            } else {
                setMostrarModalCadastro(false);
            }
        }
    }

    return (
        <div className="div-salas">
            <div className="lab-info">
                <h1>{props.idLab.nome}</h1>
                <button>Editar</button>
                <button>Apagar</button>
            </div>
            <div className="lista-salas">
                <ListarSalaGerencia lab={props.idLab} abrir={addEquipamento} />
            </div>
            <div>
                {mostrarModalCadastro && <TelaCadastroEquipamento callback={setMostrarModalCadastro} sala={sala} />}
            </div>
        </div>
    )
}


export default GerenciarSalas