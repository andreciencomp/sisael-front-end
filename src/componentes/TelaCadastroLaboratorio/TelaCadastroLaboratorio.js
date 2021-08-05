import React, { useEffect, useState } from 'react'

import './TelaCadastroLaboratorio.css'
import TelaCadastroSala from '../TelaCadastroSala/TelaCadastroSala'

function TelaCadastroLaboratorio(props) {

    const [sala, setSala] = useState(null);
    const [listaSala, setListaSala] = useState([]);

    useEffect(() => {


    });

    function removerSala(e) {
        e.preventDefault();
        let idx = e.target.value;
        listaSala.splice(idx, 1);
        setListaSala([...listaSala]);
    }

    async function evtCadastrarLaboratorio(e) {
        e.preventDefault();
        let lab = { nome: e.target.nome.value, salas: listaSala };
        console.log("lista de labs: " + JSON.stringify(lab));

        let dados = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(lab)

        };

        let resposta = await fetch("http://localhost:8080/laboratorios/cadastrar", dados);
        if (resposta.ok) {
            alert("Laboratório cadastrado com sucesso");
            setListaSala([]);

        } else {

        }
        console.log(await resposta.json());



    }

    function adicionarSala(e) {
        e.preventDefault();
        listaSala.push({ nome: e.target.nome.value, itemKey: listaSala.length });
        setSala({ nome: e.target.nome.value });

    }

    return (
        <div className="container-tela-cadastro">
            <h1 className="titulo">Cadastro de Laboratório</h1>
            <form className="form-cad-lab" onSubmit={evtCadastrarLaboratorio}>
                <input name="nome" type="text" placeholder="Nome do Laboratorio" />
                <button type="submit">Cadastrar Laboratório</button>
            </form>

            <form className="form-nome-sala" onSubmit={adicionarSala}>
                <input name="nome" type="text" placeholder="Adicionar nome da sala" />
                <button type="submit">Adicionar sala</button>
            </form>


            <div className="lista-salas-todo">
                <span>Salas a serem adicionadas</span>
                {listaSala.map((s, i) => {
                    return (
                        <li key={s.itemKey} className="row-todo">
                            <TelaCadastroSala sala={s} />
                            <button value={i} onClick={removerSala}>Remover</button>
                        </li>);
                })}
            </div>
            <div className="btn-bottom">
                <button className="btn-fechar" onClick={props.callBackJanela}>Fechar</button>
            </div>


        </div>
    );


}

export default TelaCadastroLaboratorio;