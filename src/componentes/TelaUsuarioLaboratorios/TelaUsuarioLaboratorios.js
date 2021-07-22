import React from 'react'
import axios from 'axios'
import './TelaUsuarioLaboratorios.css'
import ListarLabUsuario from './ListarLabUsuario'
import ListarSalaUsuario from './ListarSalaUsuario'

function TelaUsuarioLaboratorios(){

    const [lab, setLab] = React.useState();
    const [mostrarModalSalas, setMostrarModalSalas] = React.useState();

    const abrirLab = function (e){
        if (lab == null) {
            setLab({ id: e.target.id, nome: e.target.name });
            setMostrarModalSalas(true);
        } else {
            if (lab.nome !== e.target.name) {
                setLab({ id: e.target.id, nome: e.target.name });
                setMostrarModalSalas(true);
            } else {
                setLab();
                setMostrarModalSalas(false);
            }
        }
    }

    return(
        <div className="div-total">
            <div className="div-list-labs">
                <ListarLabUsuario abrir={abrirLab}/>            
            </div>
            <div className="div-salas">
            {mostrarModalSalas && <ListarSalaUsuario callback={setMostrarModalSalas} lab={lab} />}
            </div>
        </div>
        
    )
        
}

export default TelaUsuarioLaboratorios