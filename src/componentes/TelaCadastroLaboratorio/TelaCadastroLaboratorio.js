import React, { useEffect, useState } from 'react'

import './TelaCadastroLaboratorio.css'
import TelaCadastroSala from '../TelaCadastroSala/TelaCadastroSala'
import axios from 'axios'

function TelaCadastroLaboratorio(){

    const[listaSala, setListaSala] = useState([])
    const[sala, setSala] = useState(null);
    const[idLab, setIdLab] = useState(null);
    useEffect(()=>{
        
    });

    function removerSala(e){
       e.preventDefault();
       let idx = e.target.value;
       listaSala.splice(idx,1);
       setListaSala([...listaSala]);
       console.log(listaSala);
    }

    function adicionarSala(e){
        e.preventDefault();
        listaSala.push({nome: e.target.nome.value});
        setSala({nome: e.target.nome.value});
        e.target.nome.value = "";
   }

   function cadastrarSalas(id){
       
    listaSala.map((s,i)=>
        axios.post('http://localhost:8080/sala/cadastrar/'+id, {
            nome: s.nome
        }).then(response =>{
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })    
    );
   }

   async function evtCadastrarLaboratorio(e){
    e.preventDefault();

    axios.post('http://localhost:8080/laboratorio/cadastrar', {
            nome: e.target.nomeLab.value
        }).then(response =>{
            console.log(response.data);
           cadastrarSalas(response.data.id);
        }).catch(error => {
            console.log(error);
        })
    };

    return(
        <div className="container-tela">
            <form onSubmit={evtCadastrarLaboratorio}>
                <input type="text" name="nomeLab" placeholder="Nome do Laboratorio"/>
                <div class="form-btn">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
            
            <div className="lista-salas">
                <form className="todo-controle" onSubmit={adicionarSala}>
                    <div>
                        <input name="nome" type="text" placeholder="Adicionar nome da sala"/>

                        <button type="submit">Adicionar Sala</button>
                    </div>
                </form>
                <div className="lista-salas-todo">
                    <p1>Salas a serem adicionadas</p1>
                    {listaSala.map((s,i)=>{
                    return (
                    <li key={s.nome} className="row-todo">
                        <TelaCadastroSala sala={s}/>
                        <button value={i} onClick={removerSala}>Remover</button>
                    </li> );
                })}
                </div>
                

            </div>

        </div>
    );


}

export default TelaCadastroLaboratorio;