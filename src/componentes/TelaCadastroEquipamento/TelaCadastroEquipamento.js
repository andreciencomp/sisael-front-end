import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './TelaCadastroEquipamento.css'
function TelaCadastroEquipamento(props){

    const[tombamento, setTombamento] = useState(0);
    const[nome, setNome] = useState("");
    const[itens, setItens] = useState([]);
    const[itemId, setItemId] = useState(0);

    
    useEffect(()=>{
        console.log(itens);
    });

    function btnCancelar(e){
        e.preventDefault();
        props.callback(false);
    } 

    function btnCadastrar(e){
        e.preventDefault();         
        let valNome = nome;
        let opcoes = {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('basic_auth')
            },
            body: JSON.stringify({nome:valNome})
        };

        fetch('http://localhost:8080/equipamentos/cadastrar'
        , opcoes)
        .then(response=> response.json())
        .then(data => { //obtem o objeto do tipo do equipamento
            itens.forEach(item => {
                console.log("data id: " + data.id);
                item.equipamento = {id:data.id};
                cadastrarItemEquipamento(item);
                
            });
            alert("Cadastrado");
            setItens([]);
            
        });
   
    }

    async function cadastrarItemEquipamento(item){

        let opcoes = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('basic_auth')
            },
            body: JSON.stringify(item)
        }

        let resposta = await fetch('http://localhost:8080/itensequipamentos/cadastrar', opcoes);
        if(resposta.ok){

            let dado = await resposta.json();
            
        }else{

            alert("Um erro aconteceu\n "  + resposta.status);
        }


    }

    function btnAdicionarItem(e){
        e.preventDefault();
        let keyv = itemId;
        console.log(keyv);
        itens.push({tombamento:null, key:itemId});
        setItemId(itemId + 1);
        setItens([...itens])
    }

    function btnRemoverItem(e){
        e.preventDefault();
        let idx = e.target.value;
        itens.splice(idx, 1);
        setItens([...itens]);
    }

    function onChangeNome(e){
        setNome(e.target.value);
    }


    function onChangeItem(e){

        console.log(e.target.id);
        let idx = e.target.id;
        itens[idx].tombamento = e.target.value;
    }

    return(
            <div className='tela-cad-equip-container'>
                <h1>Tipo do equipamento</h1>
                <div className="entrada-nome">
                    <label>Nome</label>
                    <input type="text" placeholder="Nome do equipamento" onChange={onChangeNome}/>
                </div>
                
                <div className="itens">
                    <h5>Adicione equipamentos do tipo acima</h5>
                    {itens.map((item,i)=>{
                        return(
                        <li className="item" key={item.key}>
                            <input id={i}  type="text" placeholder="Tombamento" onChange={onChangeItem}/>
                            <button className="btn-remover" onClick={btnRemoverItem} value={i}>remover</button>
                        </li>);
                    })}

                </div>
                <div className="btn-adicionar-item">
                    <button onClick={btnAdicionarItem}>ADICIONAR ITEM</button>
                </div>
                <div className="botoes">
                    <Link className="btn-cancelar" to='/gerencia/equipamentos'>cancelar</Link>
                    <button className="btn-cadastrar" onClick={btnCadastrar}>Cadastrar</button>
                </div>

            </div>
            );


}

export default TelaCadastroEquipamento;