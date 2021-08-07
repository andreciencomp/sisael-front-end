import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import TelaCadastroLaboratorio from '../TelaCadastroLaboratorio/TelaCadastroLaboratorio'
import './GerenciaLaboratorios.css'

function GerenciaLaboratorios(){


    let [telaCadLabVisivel, setTelaCadVisivel] = useState(false);
    let [telaListaLabVisivel, setTelaListaLabVisivel] = useState(false);

    function evtMostrarTelaCadastro(e){
        e.preventDefault();
        if(telaCadLabVisivel==true){
            setTelaCadVisivel(false);
        }else{
            setTelaCadVisivel(true);
        }

    }


    return (
        <div className="container-gerencia-lab">
            
            <div className="btn-tab">
                <button onClick={evtMostrarTelaCadastro}>Cadastrar Laboratorio</button>
                <Link to='/gerencia/laboratorios'>Lista</Link>
            </div>

            <div className="container-tela-ger-lab">
                {telaCadLabVisivel && <TelaCadastroLaboratorio callBackJanela={evtMostrarTelaCadastro}/>}
                
            </div>

        </div>
    );

}

export default GerenciaLaboratorios;
