import React, {useState, useEffect} from 'react'
import './TelaLogin.css'

function TelaLogin(props){

    const[nome, setNome] = useState("");
    const[senha, setSenha] = useState("");

    function onChangeNomeUsuario(e){
        setNome(e.target.value);
    }

    function onChangeSenha(e){
        setSenha(e.target.value);
    }

    function btnLoginSigaa(e){
        props.callbackLoginSigaa(nome,senha);
    }

    function btnLoginGerencia(e){
        props.callbackLoginGerencia(nome,senha);
    }

   
    

    return(
        <div className="tela-login-container">
                <div>
                    <h1>LOGIN</h1>
                    <input type="text" placeholder="Nome de usuário" onChange={onChangeNomeUsuario}/>
                    <input type="password" onChange={onChangeSenha}/>
                    <button onClick={btnLoginSigaa}>LOGIN VIA SIGAA</button>
                    <button onClick={btnLoginGerencia}>LOGIN GERENCIA</button>
                </div>

        </div>
    );


}

export default TelaLogin;
