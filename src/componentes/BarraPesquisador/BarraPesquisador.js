import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './BarraPesquisador.css'

function BarraPesquisador(props) {

    function evtLogout(e){
        e.preventDefault();
        props.callbackLogout();
      }
    return (

        <div className="barra-pesquisador">
            <nav>
                <Link to='/reservas'>Minhas Reservas</Link>
                <Link to='/reservas/cadastrar'>Fazer Reserva</Link>
            </nav>
            <nav>
                <Link to="/" onClick={evtLogout}>logout</Link>
            </nav>
        </div>

    );

}

export default BarraPesquisador;