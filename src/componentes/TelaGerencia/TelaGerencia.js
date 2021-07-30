import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './TelaGerencia.css'
//import GerenciaEquipamentos from '../GerenciaEquipamentos/GerenciaEquipamentos'
import GerenciaLaboratorios from '../GerenciaLaboratorios/GerenciaLaboratorios'
import GerenciaHorarios from '../GerenciaHorarios/GerenciaHorarios'


function TelaGerencia() {

    return (
        <div className='container'>

            <BrowserRouter>
                <div class='topo'>
                    <h1>SisAEL</h1>
                    <nav>
                        {//<Link to='/gerencia/equipamentos'>Equipamentos</Link>
                        }
                        <Link to='/gerencia/laboratorios'>Laboratorios</Link>
                        <Link to='/gerencia/horarios'>Horários</Link>
                    </nav>
                    <Link to="#">logout</Link>
                </div>

                <Switch>
                    {
                        //<Route path="/gerencia/equipamentos">
                        //    <GerenciaEquipamentos/>
                        //</Route>
                    }
                    <Route path="/gerencia/laboratorios">
                        <GerenciaLaboratorios />
                    </Route>
                    <Route path='/gerencia/horarios'>
                        <GerenciaHorarios />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );


}

export default TelaGerencia;