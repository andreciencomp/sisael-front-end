import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './BarraGerencia.css'

function BarraGerencia(props) {

    function evtLogout(e){
        e.preventDefault();
        props.callbackLogout();
      }
    return (
        
        <div className="barra-gerencia">
            <nav>
                <Link to='/gerencia/equipamentos'>Equipamentos</Link>
                <Link to='/gerencia/laboratorios'>Laboratorios</Link>
                <Link to='/gerencia/horarios'>Horários</Link>
            </nav>
            <nav>
                <Link to="/" onClick={evtLogout}>logout</Link>
            </nav>
        </div>

    );

}

export default BarraGerencia;