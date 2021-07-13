import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Topo from './componentes/topo/Topo'
import SubTopo from './componentes/subTopo/SubTopo'
import CampoOpcao from './componentes/campoOpcao/campoOpcao';
import ButtonAdd from './componentes/buttonAdd/buttonAdd';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
              <Route path='/'>
                  <Topo/>
                  <SubTopo />
                  <CampoOpcao />
                  <ButtonAdd />
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;