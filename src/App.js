import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import TelaGerencia from'./componentes/TelaGerencia/TelaGerencia'
import TelaInicial from './componentes/TelaInicial/TelaInicial';

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

              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;