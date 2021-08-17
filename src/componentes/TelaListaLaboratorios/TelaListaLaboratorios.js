import render from 'dom-serializer'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './TelaListaLaboratorios.css'


function TelaListaLaboratorios() {

    const [laboratorios, setLaboratorios] = useState([]);

    useEffect(() => {

        carregarLabs();
        

    }, []);

    async function carregarLabs() {

        let opcoes = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('basic_auth')
            }
        }
        let resposta = await fetch('http://localhost:8080/laboratorios', opcoes);
        if (resposta.ok == true) {
            let dado = await resposta.json();
            setLaboratorios(dado);
            console.log(dado);
        } else {
            alert('Erro ao carregar os dados');
        }


    }


    return (
        <div className="tela-lista-lab">
            {laboratorios.map((item, i) => {
                return (
                    <div className='item-lab'>
                        <div className='topo'>
                            <span className='nome-lab'>{item.nome}</span>
                            <div className='btn-tab'>
                                <Link className='btn-alterar-lab'>Alterar</Link>
                                <Link className='btn-excluir-lab'>Excluir</Link>
                            </div>
                        </div>
                        <div className='lista-salas'>
                            {item.salas.map((sala, i) => {
                                return (
                                    <div className='item-sala'>
                                        <small>{sala.nome}</small>
                                        <Link className='btn-agendamentos'>Agendamentos</Link>
                                        <Link className='btn-alterar-sala'>Alterar</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )

}

export default TelaListaLaboratorios;