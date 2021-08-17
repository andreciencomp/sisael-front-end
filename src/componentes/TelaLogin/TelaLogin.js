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

    function btnLogin(e){
        props.callbackLogin(nome,senha);
    }

    return(
        <div className="tela-login-container">
                <div>
                    <h1>LOGIN</h1>
                    <input type="text" placeholder= "Nome de usuário" onChange={onChangeNomeUsuario}/>
                    <input type="password" placeholder= "Senha" onChange={onChangeSenha}/>
                    <button onClick={btnLogin}>LOGIN</button>
                </div>

        </div>
    );
}

export default TelaLogin;
