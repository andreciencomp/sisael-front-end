import axios from 'axios';
import React, { useState } from 'react'
import './UsuarioReservar.css'
import TelaUsuarioReservar from '../TelaUsuarioReservar/TelaUsuarioReservar';

function UsuarioReservar() {

    const [pesquisa, setPesquisa] = useState();
    const [modalPesquisa, setModalPesquisa] = useState(false);
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);

    let content
    if (modalPesquisa) {
        console.log("entrou 1");
        console.log(pesquisa.length);
        content = (
            pesquisa.map((element, key) => (
                <tbody key={key}>
                    <tr>
                        <td>{element.idE}</td>
                        <td>{element.nomeE}</td>
                        <td>{element.nomeS}</td>
                        <td>{element.nomeL}</td>
                        <td><button id={element.idE} onClick={cadastrarReserva}>Reservar</button></td>
                    </tr>
                </tbody>
            ))
        )
    } else {
        console.log("entrou 2");
        content = (
            <tbody>
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        )
    }

    function buscarEq(e) {
        e.preventDefault();
        setPesquisa([]);
        var list = [];
        axios.get('http://localhost:8080/equipamentos/buscar/' + e.target.nomeEquipamento.value)
            .then(resE => {
                resE.data.forEach(elementE => {
                    axios.get('http://localhost:8080/sala/' + elementE.idSala)
                        .then(resS => {
                            axios.get('http://localhost:8080/laboratorio/' + resS.data.lab)
                                .then(resL => {
                                    list.push({ idE: elementE.id, nomeE: elementE.nome, nomeS: resS.data.nome, nomeL: resL.data.nome });
                                })
                        })
                })
            });
        setPesquisa(pesquisa => list);
        setModalPesquisa(true);
        console.log(pesquisa);
    }

    function cadastrarReserva(e) {
        console.log(e.target.id);
    }

    return (
        <div className="usuario-reservar">
            <div className="busca">
                <form className="controle-busca" onSubmit={buscarEq}>
                    <div>
                        <input name="nomeEquipamento" type="text" placeholder="Qual equipamento procura?" />
                        <button type="submit">Procurar</button>
                    </div>
                </form>
            </div>
            <div className="list-busca">
                <table>
                    <thead>
                        <tr id="tr-topo">
                            <th>Id equipamento</th>
                            <th>Nome equipamento</th>
                            <th>Nome sala</th>
                            <th>Nome laboratorio</th>
                            <th>Reservar</th>
                        </tr>
                    </thead>
                    {content}
                </table>
            </div>

        </div>


    )

}
// <div>
//{mostrarModalCadastro && <TelaUsuarioReservar callback={setMostrarModalCadastro} />}
//</div>
export default UsuarioReservar