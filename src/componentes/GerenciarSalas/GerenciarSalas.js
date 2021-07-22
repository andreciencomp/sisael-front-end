import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GerenciarSalas(props) {

    const [Lab, setLab] = useState();
    const [edit, setEdit] = useState(false);

    function editarLab(){
        if(edit)
            setEdit(false)
        else
            setEdit(true)
    }

    return (
        <div className="div-salas">
            <h1>{props.idLab.nome}</h1>

            <div className="div-buttons">
                <button onClick={editarLab}>Editar</button>
                <button>Apagar</button>
            </div>
        </div>
    )
}


export default GerenciarSalas