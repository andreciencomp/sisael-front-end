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
import TelaCadastroReserva from './componentes/TelaCadastroReserva/TelaCadastroReserva';
import BarraAcaoEquipamento from './componentes/BarraAcaoEquipamento/BarraAcaoEquipamento';
import TelaCadastroEquipamento from './componentes/TelaCadastroEquipamento/TelaCadastroEquipamento';
import TelaListaLaboratorios from './componentes/TelaListaLaboratorios/TelaListaLaboratorios';
import BarraAcaoLaboratorio from './componentes/BarraAcaoLaboratorios/BarraAcaoLaboratorio';
import TelaCadastroLaboratorio from './componentes/TelaCadastroLaboratorio/TelaCadastroLaboratorio';

function App() {

  const[usuario, setUsuario] = useState(null);
  const[logado, setLogado] = useState(false);

  
  async function loginSigaa(nome,senha){

    let opcoes = {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }
    let response = await fetch('http://localhost:8080/pesquisadores/fulano',opcoes);
    let usuario = await response.json();
    console.log(usuario);
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
              <BarraAcaoEquipamento/>
            </Route>
            <Route path='/gerencia/equipamentos/cadastro' exact>
              <div className="tela-container">
                <BarraAcaoEquipamento/>
                <TelaCadastroEquipamento/>
              </div>
              
            </Route>
            <Route path='/gerencia/laboratoooooorios' exact>
              <GerenciaLaboratorios />
            </Route>
            <Route path='/gerencia/laboratorios' exact>
                <div className='tela-container'>
                  <BarraAcaoLaboratorio/>
                  <TelaListaLaboratorios/>
                </div>
            </Route>
            <Route path='/gerencia/laboratorios/cadastro' exact>
                <div className='tela-container'>
                  <BarraAcaoLaboratorio/>
                  <TelaCadastroLaboratorio/>
                </div>
            </Route>
            <Route path='/gerencia/horarios' exact>
              <GerenciaHorarios />
            </Route>
            <Route path='/reservas' exact>
              <p>Não implementado ainda</p>
            </Route>
            <Route path='/reservas/cadastrar' exact>
              <TelaCadastroReserva usuario={usuario}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;