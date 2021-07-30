import React from 'react'
//import axios from 'axios'
import './TelaUsuarioReservar.css'

function TelaUsuarioReservar() {


    return (
        <div className="usuario-reservar">
            <div className="busca">
                <form className="controle-busca">
                    <div>
                        <input name="nomeEquipamento" type="text" placeholder="Qual equipamento procura?" />
                        <button type="submit">Procurar</button>
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>


    )

}

export default TelaUsuarioReservar