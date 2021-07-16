import React, { useEffect, useState } from 'react'
import TelaCadastroEquipamento from '../TelaCadastroEquipamento/TelaCadastroEquipamento';
import './GerenciaEquipamentos.css'

function GerenciaEquipamentos(){

    const[mostrarModal, setMostrarModal] = useState(false);
    let listaEquipamentos = [];


    useEffect(()=>{

        listaEquipamentos = [{tombamento: 35163515,nome:'Estufa'},{tombamento: 654855,nome:'Estufa'}];


    }, listaEquipamentos);

    function exibirModal(){
        setMostrarModal(true);
    }

    return(
        <div className='container'>
            <div className='barra-operacoes'>
                <button onClick={exibirModal}>Cadastrar equipamento</button>

            </div>
            <div class='lista-equipamentos'>
                {listaEquipamentos.map((equipamento)=>
                <li>{equipamento.nome}</li>)}
            </div>
            <div class='modal-cadastro-equip'>
                {mostrarModal && <TelaCadastroEquipamento callback={setMostrarModal}/>}
            </div>

        </div>
    );

}

export default GerenciaEquipamentos;
