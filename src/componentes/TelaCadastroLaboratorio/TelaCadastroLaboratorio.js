import React, { useEffect, useState } from 'react'

import './TelaCadastroLaboratorio.css'
import TelaCadastroSala from '../TelaCadastroSala/TelaCadastroSala'

function TelaCadastroLaboratorio(){

    const[sala, setSala] = useState(null);
    const[listaSala, setListaSala] = useState([]);

    useEffect(()=>{

        
    });

    function removerSala(e){
       e.preventDefault();
       let idx = e.target.value;
       listaSala.splice(idx,1);
       setListaSala([...listaSala]);
       console.log(listaSala);
    }

    async function evtCadastrarLaboratorio(e){
        e.preventDefault();
        let lab = {nome:'Laboratorio', salas: listaSala};
        console.log("lista de labs: " + JSON.stringify(lab));

        let dados = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(lab)

        };

        let resposta = await fetch("http://localhost:8080/laboratorios/cadastrar",dados);
        console.log(await resposta.json());

        

    }

    function adicionarSala(e){
        e.preventDefault();
        listaSala.push({nome: e.target.nome.value});
        setSala({nome: e.target.nome.value});//e.target.nome.value});

   }

    return(
        <div className="container-tela">
            <form onSubmit={evtCadastrarLaboratorio}>
                <input type="text" placeholder="Nome do Laboratorio"/>
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