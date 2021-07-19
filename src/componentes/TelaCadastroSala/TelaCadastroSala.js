import React, { useEffect, useState } from 'react'
import './TelaCadastroSala.css'

function TelaCadastroSala(props){

    const[nomeSala, setNomeSala] = useState(props.sala.nome);

    useEffect(()=>{
        props.sala.nome = nomeSala;
        

    });

    function onchange(e){
        e.preventDefault();
        setNomeSala(e.target.value);

    }

    return(
        <form className="form-sala">
            <input type="text" onChange={onchange} value={nomeSala}/>
        </form>
    );

}

export default TelaCadastroSala;