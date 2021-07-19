import React from 'react'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import './GerenciaLaboratorios.css'

function GerenciaLaboratorios(){



    return (
        <div class="container">
            
            <div class="btn-tab">
                <button>Cadastrar Laboratorio</button>
            </div>
            <div class="container-tela">
                
                <TelaCadastroLaboratorio/>
            </div>

        </div>
    );

}

export default GerenciaLaboratorios;
