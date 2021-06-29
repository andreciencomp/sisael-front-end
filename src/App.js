import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import JanelaInicial from './componentes/JanelaInicial/JanelaInicial'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
              <Route path='/'>
                  <JanelaInicial/>
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
