import axios from 'axios';
import React from 'react'
//import axios from 'axios'
import './TelaUsuarioReservar.css'
import UsuarioListarEquipamentos from './UsuarioListarEquipamentos'

function TelaUsuarioReservar() {

    const [equipamento, setEquipamento] = React.useState();

    function buscarEq(e) {
        e.preventDefault();
        setEquipamento(e.target.nomeEquipamento.value);
    }

    return (
        <div className="usuario-reservar">
            <div className="busca">
                <form className="controle-busca" onSubmit={buscarEq}>
                    <div>
                        <input name="nomeEquipamento" type="text" placeholder="Qual equipamento procura?"/>
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
                <UsuarioListarEquipamentos equipamento={equipamento}/>
                </table>
            </div>
            <div>
            </div>
        </div>


    )

}

export default TelaUsuarioReservar