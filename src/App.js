import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import GerenciaEquipamentos from './componentes/GerenciaEquipamentos/GerenciaEquipamentos';
import GerenciaHorarios from './componentes/GerenciaHorarios/GerenciaHorarios';
import GerenciaLaboratorios from './componentes/GerenciaLaboratorios/GerenciaLaboratorios';

import TelaGerencia from './componentes/BarraGerencia/BarraGerencia'
import TelaLogin from './componentes/TelaLogin/TelaLogin';
import BarraGerencia from './componentes/BarraGerencia/BarraGerencia';
import BarraPesquisador from './componentes/BarraPesquisador/BarraPesquisador'

function App() {

  const[usuario, setUsuario] = useState(null);
  const[logado, setLogado] = useState(false);

  
  function loginSigaa(nome,senha){

    let usuario ={};
    usuario.nome = nome;
    usuario.senha = senha;
    usuario.role = "pesquisador";
    setUsuario(usuario);
    setLogado(true);


  }

  function loginGerencia(nome, senha){
    let usuario ={};
    usuario.nome = nome;
    usuario.senha = senha;
    usuario.role = "gerente";
    setUsuario(usuario);
    setLogado(true);

  }

  function logout(){
    setLogado(false);
    setUsuario(null);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {usuario!=null && usuario.role=='gerente' && <BarraGerencia callbackLogout={logout}/>}
          {usuario!=null && usuario.role=='pesquisador' && <BarraPesquisador/>}
          {usuario == null && <Redirect to="/"/>}
        </div>
        <div className="container-telas">
          <Switch>
            <Route path="/" exact>
              {logado && usuario.role=='gerente' && <Redirect to="/gerencia/equipamentos"/>}
              {logado && usuario.role=='pesquisador' && <Redirect to="/reservas"/>}
             <TelaLogin callbackLoginSigaa={loginSigaa} callbackLoginGerencia={loginGerencia}/>

            </Route>
            <Route path='/gerencia/equipamentos' exact>
              <GerenciaEquipamentos />
            </Route>
            <Route path='/gerencia/laboratorios' exact>
              <GerenciaLaboratorios />
            </Route>
            <Route path='/gerencia/horarios' exact>
              <GerenciaHorarios />
            </Route>
            <Route path='/reservas'>
              <p>Não implementado ainda</p>
            </Route>
            <Route path='/reservas/cadastrar'>
              <p>Não implementado ainda</p>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;