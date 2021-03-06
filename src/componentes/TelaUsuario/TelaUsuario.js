import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import UsuarioReservar from '../UsuarioReservar/UsuarioReservar';

function TelaUsuario(){

    return (
    <div className='container'>
 
        <BrowserRouter>
        <div className='topo'>
            <h1>SisAEL</h1>
                <nav>
                    <Link to='/usuario/reservar'>Reservar</Link>
                    <Link to='/usuario/minhas_reservas'>Minhas reservas</Link>
                </nav>
                <Link to="#">logout</Link>
        </div>
        
            <Switch>
                <Route path='/usuario/reservar'>
                    <UsuarioReservar />
                </Route>
                <Route path='/usuario/minhas_reservas'>
                    
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );


} 

export default TelaUsuario