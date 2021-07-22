import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import TelaGerencia from'./componentes/TelaGerencia/TelaGerencia'
import TelaInicial from './componentes/TelaInicial/TelaInicial';
import TelaUsuario from './componentes/TelaUsuario/TelaUsuario'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
    
          <Switch>
              <Route path="/" exact>
                  <TelaInicial/>
              </Route>
              <Route path='/gerencia' exact> 
                  <TelaGerencia/>
              </Route>
              <Route path='/usuario'> 
                  <TelaUsuario />
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;