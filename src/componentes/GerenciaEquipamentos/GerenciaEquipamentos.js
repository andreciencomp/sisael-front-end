import React, { useEffect, useState } from 'react'
import TelaCadastroEquipamento from '../TelaCadastroEquipamento/TelaCadastroEquipamento';
import './GerenciaEquipamentos.css'

function GerenciaEquipamentos(){

    const[mostrarModal, setMostrarModal] = useState(false);
    let listaEquipamentos = [];


    useEffect(()=>{

        //listaEquipamentos = [{tombamento: 35163515,nome:'Estufa'},{tombamento: 654855,nome:'Estufa'}];


    });

    function exibirModal(){
        setMostrarModal(true);
    }

    function fecharModal(){
        setMostrarModal(false);
    }

    return(
        <div className='container-equipamentos'>
            <div className='barra-operacoes'>
                <button onClick={exibirModal}>Cadastrar equipamento</button>

            </div>
            <div className='lista-equipamentos'>
                {listaEquipamentos.map((equipamento)=>
                <li>{equipamento.nome}</li>)}
            </div>
            <div class='modal-cadastro-equip'>
                {mostrarModal && <TelaCadastroEquipamento callback={fecharModal}/>}
            </div>

        </div>
    );

}

export default GerenciaEquipamentos;
