import React, {useEffect, useState} from 'react'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import './GerenciaLaboratorios.css'

function GerenciaLaboratorios(){

    const[mostrarModal, setMostrarModal] = useState(false);

    function exibirModal(){
        if(mostrarModal)
            setMostrarModal(false);
        else
            setMostrarModal(true);
    }

    return (
        <div class="container">
            
            <div class="btn-tab">
                <button onClick={exibirModal}>Cadastrar Laboratorio</button>
            </div>
            <div class="container-tela">

                {mostrarModal && <TelaCadastroLaboratorio callback={setMostrarModal}/>}
            </div>

        </div>
    );

}

export default GerenciaLaboratorios;
